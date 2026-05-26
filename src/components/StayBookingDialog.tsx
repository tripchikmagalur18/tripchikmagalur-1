"use client";

import { useEffect, useId, useState } from "react";
import { Calendar, Minus, Plus, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { todayLocalISO } from "@/lib/booking-date";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export type StayBookingDetails = {
  checkInDate: string;
  adults: number;
};

type StayBookingDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resortName: string;
  pricePerPerson: number;
  minAdults: number;
  maxAdults: number;
  initialDate?: string;
  initialAdults?: number;
  submitLabel?: string;
  onConfirm: (details: StayBookingDetails) => void;
};

export function StayBookingDialog({
  open,
  onOpenChange,
  resortName,
  pricePerPerson,
  minAdults,
  maxAdults,
  initialDate,
  initialAdults = 2,
  submitLabel = "Add to Cart",
  onConfirm,
}: StayBookingDialogProps) {
  const dateId = useId();
  const adultsId = useId();
  const hintId = useId();
  const minDate = todayLocalISO();

  const [checkInDate, setCheckInDate] = useState(initialDate ?? "");
  const [adults, setAdults] = useState(initialAdults);

  useEffect(() => {
    if (!open) return;
    setCheckInDate(initialDate ?? "");
    setAdults(initialAdults);
  }, [open, initialDate, initialAdults]);

  const lineTotal = pricePerPerson * adults;
  const canSubmit = checkInDate.length > 0 && adults >= minAdults && adults <= maxAdults;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onConfirm({ checkInDate, adults });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90dvh] overflow-y-auto gap-0 p-0">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <DialogHeader className="px-5 pt-5 pb-3 text-left">
            <DialogTitle className="font-display text-xl pr-8">Book your stay</DialogTitle>
            <DialogDescription>{resortName}</DialogDescription>
          </DialogHeader>

          <div className="px-5 pb-5 space-y-5">
            <div>
              <label htmlFor={dateId} className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <Calendar className="w-4 h-4 text-sunset shrink-0" aria-hidden="true" />
                Check-in date
              </label>
              <input
                id={dateId}
                type="date"
                required
                min={minDate}
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className={`w-full min-h-11 px-3 rounded-xl border border-border bg-background text-foreground text-base ${focusRing}`}
              />
            </div>

            <fieldset className="border-0 p-0 m-0">
              <legend
                id={adultsId}
                className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
              >
                <Users className="w-4 h-4 text-sunset shrink-0" aria-hidden="true" />
                Number of adults
              </legend>
              <div
                className="flex items-center justify-between gap-3 p-2.5 rounded-xl border border-border bg-background"
                role="group"
                aria-labelledby={adultsId}
                aria-describedby={hintId}
              >
                <button
                  type="button"
                  onClick={() => setAdults((n) => Math.max(minAdults, n - 1))}
                  disabled={adults <= minAdults}
                  className={`min-w-11 min-h-11 rounded-full border border-border flex items-center justify-center hover:bg-muted disabled:opacity-40 transition ${focusRing}`}
                  aria-label={`Decrease adults. Currently ${adults}`}
                >
                  <Minus className="w-5 h-5" aria-hidden="true" />
                </button>
                <span className="text-xl font-sans font-semibold tabular-nums" aria-live="polite">
                  {adults}
                </span>
                <button
                  type="button"
                  onClick={() => setAdults((n) => Math.min(maxAdults, n + 1))}
                  disabled={adults >= maxAdults}
                  className={`min-w-11 min-h-11 rounded-full border border-border flex items-center justify-center hover:bg-muted disabled:opacity-40 transition ${focusRing}`}
                  aria-label={`Increase adults. Currently ${adults}`}
                >
                  <Plus className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              <p id={hintId} className="text-xs text-muted-foreground mt-1.5">
                {minAdults}–{maxAdults} adults
              </p>
            </fieldset>

            <div
              className="flex items-center justify-between py-3 px-3 rounded-xl bg-muted/50 border border-border"
              aria-label={`Estimated total ₹${lineTotal.toLocaleString("en-IN")} for ${adults} adults`}
            >
              <span className="text-sm text-muted-foreground">Estimated total</span>
              <span className="text-lg font-sans font-semibold tabular-nums text-sunset">
                ₹{lineTotal.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="text-xs text-muted-foreground -mt-3">
              ₹{pricePerPerson.toLocaleString("en-IN")} per adult per night
            </p>
          </div>

          <DialogFooter className="px-5 pb-5 pt-0 gap-2 sm:gap-2 flex-col sm:flex-col">
            <button
              type="submit"
              disabled={!canSubmit}
              className={`w-full min-h-11 py-3 rounded-full bg-sunset hover:bg-sunset/90 text-white font-medium text-sm transition disabled:opacity-50 disabled:cursor-not-allowed ${focusRing}`}
            >
              {submitLabel}
            </button>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className={`w-full min-h-11 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-muted transition ${focusRing}`}
            >
              Cancel
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
