import React, { useState, useEffect } from "react";
import Counter from "./components/counter/counter";
import { Observable, fromEvent } from "rxjs";
import { takeUntil } from "rxjs/operators";

import timeTransformation from "./services/timeTransformation";
function App() {
  const [time, setTime] = useState(3600);
  const [state, setState] = useState(false);

  const stop = document.getElementById("stop");
  const wait = document.getElementById("wait");
  useEffect(() => {
    if (state) {
      const stopClick = fromEvent(stop, "click");
      const waitClick = fromEvent(wait, "click");

      const timer$ = new Observable((observer) => {
        const interval = setInterval(() => {
          observer.next();
        }, 1000);

        return () => {
          clearInterval(interval);
        };
      });

      timer$
        .pipe(takeUntil(stopClick))
        .pipe(takeUntil(waitClick))
        .subscribe({
          next: () => {
            if (state === true) {
              setTime((prev) => prev + 1);
            }
          },
        });
      // const id = setInterval(() => {
      //   setTime((c) => c + 1);
      // }, 1000);
      // return () => clearInterval(id);
    }
  }, [state, stop, wait]);

  return (
    <>
      <Counter
        time={timeTransformation(time)}
        buttonList={["start", "stop", "wait", "reset"]}
        onClick={{
          start: () => setState(true),
          stop: (e) => {
            setState(false);
            setTime(0);
          },
          wait: (e) => {
            const evt = e;
            const delay = (e) => {
              if (e.detail === 2) {
                setState(false);
              }
            };
            setTimeout(delay(evt), 300);
          },
          reset: () => {
            setTime(0);
            setState(true);
          },
        }}
      />
    </>
  );
}
export default App;
