export function getFinalState(baseState: number, queue: (number | ((state: number) => number)[]) ): number {
  let finalState = baseState;

  for (let update of queue) {
    if (typeof update === 'function') {
      // Apply the updater function.
      finalState = update(finalState);
    } else {
      // Replace the next state.
      finalState = update as number;
    }
  }

  return finalState;
}

