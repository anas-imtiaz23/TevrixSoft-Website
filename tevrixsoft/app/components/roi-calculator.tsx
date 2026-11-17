"use client";

import { useState } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function RoiCalculator() {
  const [seats, setSeats] = useState(20);
  const [seatPrice, setSeatPrice] = useState(35);
  const [otherTools, setOtherTools] = useState(250);
  const [years, setYears] = useState(3);

  const monthlySpend = seats * seatPrice + otherTools;
  const projectedSpend = monthlySpend * 12 * years;

  return (
    <div className="calculator-panel">
      <div className="calculator-inputs">
        <label className="estimate-field">
          <span>Paid seats</span>
          <small>People using your main tools</small>
          <input
            type="number"
            min="0"
            max="100000"
            value={seats}
            onChange={(event) => setSeats(Math.max(0, Number(event.target.value) || 0))}
          />
        </label>
        <label className="estimate-field">
          <span>Monthly price per seat</span>
          <small>Use the amount on your latest invoice</small>
          <span className="estimate-input-prefix">
            <b>$</b>
            <input
              type="number"
              min="0"
              max="100000"
              value={seatPrice}
              onChange={(event) => setSeatPrice(Math.max(0, Number(event.target.value) || 0))}
            />
          </span>
        </label>
        <label className="estimate-field">
          <span>Other tools and automation</span>
          <small>Combined monthly subscriptions</small>
          <span className="estimate-input-prefix">
            <b>$</b>
            <input
              type="number"
              min="0"
              max="1000000"
              value={otherTools}
              onChange={(event) => setOtherTools(Math.max(0, Number(event.target.value) || 0))}
            />
          </span>
        </label>
        <fieldset className="estimate-years">
          <legend>Estimate period</legend>
          <div className="year-options">
            {[1, 3, 5].map((period) => (
              <button
                aria-pressed={years === period}
                className={years === period ? "year-option year-option-active" : "year-option"}
                key={period}
                onClick={() => setYears(period)}
                type="button"
              >
                {period} {period === 1 ? "year" : "years"}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="calculator-result" aria-live="polite">
        <p className="result-label">Estimated recurring spend</p>
        <strong>{currency.format(projectedSpend)}</strong>
        <p className="result-summary">
          About {currency.format(monthlySpend)} per month over {years} {years === 1 ? "year" : "years"}.
        </p>
        <p className="result-note">
          A planning estimate based on your inputs, not a quote or a promise of savings.
        </p>
        <a className="result-cta" href="#contact">Talk through your options <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  );
}