const kamus = {
    A: 0,
    B: 1,
    C: 1,
    D: 1,
    E: 2,
    F: 3,
    G: 3,
    H: 3,
    I: 4,
    J: 5,
    K: 5,
    L: 5,
    M: 5,
    N: 5,
    O: 6,
    P: 7,
    Q: 7,
    R: 7,
    S: 7,
    T: 7,
    U: 8,
    V: 9,
    W: 9,
    X: 9,
    Y: 9,
    Z: 9,
    a: 9,
    b: 8,
    c: 8,
    d: 8,
    e: 7,
    f: 6,
    g: 6,
    h: 6,
    i: 5,
    j: 4,
    k: 4,
    l: 4,
    m: 4,
    n: 4,
    o: 3,
    p: 2,
    q: 2,
    r: 2,
    s: 2,
    t: 2,
    u: 1,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
    " ": 0,
  };

  const reverseKamus = Object.entries(kamus).reduce((acc, [key, value]) => {
    if (!acc[value]) acc[value] = key.toUpperCase();
    return acc;
  }, {});

  function convertToNumbers(text) {
    return text.split("").map((char) => {
      const num = kamus[char] || 0;
      console.log(`Karakter: ${char}, Nilai: ${num}`);
      return num;
    });
  }

  function alternateMath(numbers) {
    let result = numbers.reduce((acc, num, i) => {
      if (i === 0) return num;
      const newAcc = i % 2 === 0 ? acc - num : acc + num;
      console.log(`${acc} ${i % 2 === 0 ? "-" : "+"} ${num} = ${newAcc}`);
      return newAcc;
    }, 0);
    return result;
  }

  function convertToAbjad(num) {
    let result = [];
    if (num < 0) num *= -1;
    let remaining = num;

    while (remaining > 0) {
      for (let i = 0; i <= 9 && remaining > 0; i++) {
        if (remaining >= i) {
          result.push(i);
          remaining -= i;
          console.log(`${remaining}, Nilai: ${i}`);
        } else {
          break;
        }
      }
    }

    console.log(`Hasil: ${num} = ${result.join(" + ")}`);
    console.log(`num: [${result.join(", ")}]`);

    result = result.map((num) => reverseKamus[num] || "A");
    console.log(`Hasil: ${num} = ${result.join(" + ")}`);

    return result;
  }

  function processSoal4(abjad) {
    console.log(`Input Abjad: ${abjad}`);

    // Convert input abjad to numeric values using `kamus`
    const numericValues = abjad.map((char) => kamus[char] || 0);
    console.log(`Numeric Values from Kamus: [${numericValues.join(", ")}]`);

    // Recalculate the sum
    const recalculatedSum = numericValues.reduce(
      (acc, num) => acc + num,
      2
    );
    console.log(`Recalculated Sum: ${recalculatedSum}`);

    // Breakdown the sum into individual numbers that add up to the total sum
    let remaining = recalculatedSum;
    let breakdown = [];
    for (let i = 0; i <= 9 && remaining > 0; i++) {
      if (remaining >= i) {
        breakdown.push(i);
        remaining -= i;
      } else {
        break;
      }
    }

    // Second phase: handle remaining sum differently based on initial sum
    if (remaining > 0) {
      if (remaining % 2 === 0) {
        // If remaining is even
        breakdown.push(0, 1, 1, 2);
      } else {
        // If remaining is odd
        if (remaining >= 2) {
          breakdown.push(1, 2);
          remaining -= 3;
        }
        while (remaining > 0) {
          breakdown.push(1);
          remaining--;
        }
      }
    }

    console.log(`Breakdown: ${breakdown.join(" + ")}`);

    // Convert the breakdown into abjad using reverseKamus
    const recalculatedAbjad = breakdown
      .map((num) => reverseKamus[num] || "A")
      .join(" ");
    console.log(`Recalculated Abjad: ${recalculatedAbjad}`);

    return { recalculatedAbjad, recalculatedSum, breakdown };
  }

  function processSoal5(num) {
    console.log(`Input number: ${num}`);
    let remain = num;
    let result = [];

    for (let i = 0; i <= 9 && remain > 0; i++) {
      if (remain >= i) {
        result.push(i);
        remain -= i;
      } else {
        break;
      }
    }

    if (remain > 0) {
      if (remain >= 2) {
        result.push(1, 2);
        remain -= 3;
      }
      while (remain > 0) {
        result.push(1);
        remain--;
      }
    }

    if (result[result.length - 1] % 2 === 0) {
      num += 4;
    } else {
      num += 5;
    }

    let recalculatedSum = num;
    console.log(`Recalculated Sum: ${recalculatedSum}`);

    let remaining = recalculatedSum;
    let breakdown = [];

    // Start with pairs of 1s
    if (remaining >= 2) {
      breakdown.push(1, 1);
      remaining -= 2;
    }

    // Add pair of 3s
    if (remaining >= 6) {
      breakdown.push(3, 3);
      remaining -= 6;
    }

    // Use 5s when possible for the bulk of remaining sum
    while (remaining >= 5) {
      breakdown.push(5);
      remaining -= 5;
      if (remaining % 2 === 0 && 5 < remaining < 9 && remaining > 4) {
        breakdown.push(1, 1, 1);
        remaining -= 3;
        if (remaining <= 3) {
          breakdown.push(3);
          remaining -= 3;
        }
      }
    }

    // Handle remaining amount
    while (remaining > 0) {
      if (remaining >= 4) {
        breakdown.push(1, 3);
        remaining -= 4;
      } else if (remaining === 3) {
        breakdown.push(3);
        remaining -= 3;
      } else if (remaining === 2) {
        breakdown.push(1, 1);
        remaining -= 2;
      } else {
        breakdown.push(1);
        remaining -= 1;
      }
    }

    console.log(`Breakdown: ${breakdown.join(" + ")} = ${recalculatedSum}`);

    return { recalculatedSum, breakdown };
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function processText() {
    const input = document.getElementById("inputText").value;

    // Soal 1
    const numbers = convertToNumbers(input);
    document.getElementById(
      "output1"
    ).textContent = `Hasil Konversi: ${numbers.join(" ")}`;

    // Soal 2
    const sumResult = alternateMath(numbers);
    document.getElementById(
      "output2"
    ).textContent = `Hasil Operasi: ${sumResult}`;

    // Soal 3
    const abjad = convertToAbjad(sumResult);
    document.getElementById(
      "output3"
    ).textContent = `Hasil Konversi ke Abjad: ${abjad.join(" ")}`;

    // Soal 4
    const soal4Result = processSoal4(abjad);
    document.getElementById("output4").innerHTML = `
            Hasil Penjumlahan Ulang: ${
              soal4Result.recalculatedSum
            } = ${soal4Result.breakdown.join(" + ")}<br>
            Konversi ke Abjad: ${soal4Result.recalculatedAbjad}
        `;

    // Soal 5
    const soal5Result = processSoal5(soal4Result.recalculatedSum);
    document.getElementById("output5").innerHTML = `
            Hasil Penjumlahan ulang: ${
              soal5Result.recalculatedSum
            } = ${soal5Result.breakdown.join(" + ")}<br>
        `;
  }