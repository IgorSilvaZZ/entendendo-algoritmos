const quickSortTasksByPriority = (tasks = []) => {
  if (tasks.length < 2) {
    return tasks;
  }

  const bigger = [];
  const smaller = [];

  const pivotTask = tasks[0];
  const pivotPriorityTask = pivotTask.priority;

  for (const task of tasks.slice(1)) {
    if (task.priority <= pivotPriorityTask) {
      smaller.push(task);
    } else {
      bigger.push(task);
    }
  }

  /* Inverter o lado dos valores maiores, vai para direita */

  /* Inverter o lado dos valores menores, vai para esquerda */

  return [
    ...quickSortTasksByPriority(bigger),
    ...[pivotTask],
    ...quickSortTasksByPriority(smaller),
  ];
};

const tasksParam = [
  { name: "Deploy", priority: 1 },
  { name: "Code Review", priority: 3 },
  { name: "Reunião", priority: 2 },
];

const resultQuickSortTasksByPriority = quickSortTasksByPriority(tasksParam);

console.log({ resultQuickSortTasksByPriority });