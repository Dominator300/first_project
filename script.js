let money = prompt("Ваш бюджет на месяц?",''),
     time = prompt("Введите дату в формате YYYY-MM-DD",'');

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

let aa = prompt("Введите обязательную статью расходов в этом месяце", ''),
    ab = prompt("Во сколько обойдется?",''),
    ac = prompt("Введите обязательную статью расходов в этом месяце",''),
    ad = prompt("Во сколько обойдется?",'');
appData.expences.aa = ab;
appData.expences.ac = ad;

alert(appData.budget / 30);