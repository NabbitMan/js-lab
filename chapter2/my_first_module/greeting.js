const greetingMap = new Map();

greetingMap.set('english', 'Hello Stranger');
greetingMap.set('german', 'Hallo Fremder');
greetingMap.set('hindi', 'Namaste Ajnabee');
greetingMap.set('japanese', 'Konichiwa mishirano hito');

function greet(lang){
  return greetingMap.get(lang);
};

exports.greet = greet;
