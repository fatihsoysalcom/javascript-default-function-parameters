/**
 * JavaScript'te Varsayılan Parametreleri Anlamak (Default Parameters)
 *
 * Bu örnek, JavaScript'te varsayılan parametrelerin nasıl çalıştığını gösterir.
 * ES6 ile gelen bu özellik, fonksiyonlara gönderilmeyen argümanlar için
 * otomatik olarak bir varsayılan değer atar.
 */

// ES5 öncesi yaklaşım: Manuel kontrol ile varsayılan değer atama
function greetES5(name, message) {
  // Eğer message undefined ise, varsayılan bir değer ata
  message = message === undefined ? 'Merhaba' : message;
  console.log(message + ', ' + name + '!');
}

// ES6 varsayılan parametreler ile aynı fonksiyon
function greetES6(name, message = 'Merhaba') { // message parametresi için varsayılan değer 'Merhaba'
  console.log(message + ', ' + name + '!');
}

// Varsayılan parametrelerin kullanımını gösteren örnekler
console.log('--- ES5 Örneği ---');
greetES5('Ali'); // message argümanı gönderilmediği için 'Merhaba' kullanılır
greetES5('Veli', 'Selam'); // message argümanı gönderildiği için 'Selam' kullanılır

console.log('\n--- ES6 Örneği ---');
greetES6('Ayşe'); // message argümanı gönderilmediği için varsayılan 'Merhaba' kullanılır
greetES6('Fatma', 'Günaydın'); // message argümanı gönderildiği için 'Günaydın' kullanılır

// Varsayılan parametreler, fonksiyon çağrılırken undefined gönderildiğinde de çalışır
console.log('\n--- Undefined ile Test ---');
greetES6('Can', undefined); // message için varsayılan değer kullanılır

// Varsayılan parametreler, fonksiyonun ilk parametrelerinde de kullanılabilir
function multiply(a = 1, b = 1) {
  return a * b;
}

console.log('\n--- Çarpma Örneği ---');
console.log('5 * 3 =', multiply(5, 3)); // 15
console.log('5 * (default b) =', multiply(5)); // 5 (b=1 varsayılan olarak kullanılır)
console.log('(default a) * 3 =', multiply(undefined, 3)); // 3 (a=1 varsayılan olarak kullanılır)
console.log('(default a) * (default b) =', multiply()); // 1 (a=1, b=1 varsayılan olarak kullanılır)
