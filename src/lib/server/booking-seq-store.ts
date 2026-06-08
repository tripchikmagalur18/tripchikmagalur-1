import { promises as fs } from "fs";
import path from "path";
import { BOOKING_ID_START } from "@/lib/booking-id";

const COUNTER_FILENAME = "booking-counter.json";

function counterPath(): string {
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return path.join("/tmp", COUNTER_FILENAME);
  }
  return path.join(process.cwd(), ".data", COUNTER_FILENAME);
}

type CounterFile = { lastId: number };

let mutex: Promise<void> = Promise.resolve();

async function readLastId(): Promise<number> {
  try {
    const raw = await fs.readFile(counterPath(), "utf8");
    const parsed = JSON.parse(raw) as CounterFile;
    const lastId = Number(parsed.lastId);
    if (Number.isFinite(lastId) && lastId >= BOOKING_ID_START - 1) {
      return lastId;
    }
  } catch {
    /* first run */
  }
  return BOOKING_ID_START - 1;
}

async function writeLastId(lastId: number): Promise<void> {
  const filePath = counterPath();
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify({ lastId }), "utf8");
}

/** File-backed ascending counter: 1349, 1350, 1351, … (serialized per server instance). */
export function reserveFileBookingId(): Promise<number> {
  let nextId = BOOKING_ID_START;

  const task = mutex.then(async () => {
    const lastId = await readLastId();
    nextId = lastId + 1;
    await writeLastId(nextId);
  });

  mutex = task.catch(() => undefined);

  return task.then(() => nextId);
}
