const declOfNum = (n, titles) =>
  n +
  " " +
  titles[
    n % 10 === 1 && n % 100 !== 11
      ? 0
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? 1
      : 2
  ];

const timer = () => {
  const timer = document.createElement("div");
  const timerText = document.createElement("p");
  const timerCount = document.createElement("span");

  timer.classList.add("timer");
  timerText.classList.add("timer__text");
  timerCount.classList.add("timer__count");

  timerText.textContent = "до Нового Года осталось: ";
  timerCount.textContent = "3 дня 20 часов 15 минут 17 секунд";

  timerText.append(timerCount);
  timer.append(timerText);
  document.body.prepend(timer);

  const startTimer = () => {
    const deadLine = new Date(2024, 0, 1, 0, 0, 0);
    // console.log("deadLine: ", deadLine);

    const now = new Date();
    const timeRemaning = deadLine - now;
    // const result = timeRemaning.toISOString().slice(11, 19);    ===== подумать!!!

    // console.log("timeRemaning: ", timeRemaning);
    const result = timeRemaning / 1000;
    // console.log(result);

    const seconds = Math.floor(result % 60);
    const minutes = Math.floor((result / 60) % 60);
    const hours = Math.floor((result / 3600) % 24);
    const days = Math.floor((result / 3600 / 24) % 365);
    // console.log('days: ', days);
    // console.log(seconds);

    if (timeRemaning > 0) {
      // console.log(new Date());

      const s = declOfNum(seconds, ["секунда", "секунды", "секунд"]);
      const m = declOfNum(minutes, ["минута", "минуты", "минут"]);
      const h = declOfNum(hours, ["час", "часа", "часов"]);
      const d = declOfNum(days, ["день", "дня", "дней"]);

      timerCount.textContent = `${d} ${h} ${m} ${s}`;
      setTimeout(startTimer, 1000);
    } else {
      timerCount.textContent = "0 дней 0 часов 0 минут 0 секунд";
    }
  };

  startTimer();
};

timer();
