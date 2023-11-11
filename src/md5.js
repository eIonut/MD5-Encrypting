const md5 = (message) => {
  console.log("aici");
  function leftRotate(value, amount) {
    return (value << amount) | (value >>> (32 - amount));
    //left bit rotation on a 32-bit number
  }

  //shift amount sused in the main loop
  var s = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
  var K = [];
  for (var i = 0; i < 64; i++) {
    K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * Math.pow(2, 32));
  }

  // an array k of 64 elements fiecare computata la un sine de integers

  var H0 = 0x67452301;
  var H1 = 0xefcdab89;
  var H2 = 0x98badcfe;
  var H3 = 0x10325476;

  //valoriile de hash initiale -> 32 bit words h0 h1 h2 h3 care vor produce hash-ul final

  var bytes = [];
  for (let i = 0; i < message.length; i++) {
    bytes[i] = message.charCodeAt(i);
  }
  bytes.push(0x80);

  // converteste mesajul intr-un array de ASCII byte values si appenduieste 0x80 adica 128 in decimal pentru aincepe

  while (bytes.length % 64 !== 56) {
    bytes.push(0x00);
  }

  // continua padding-ul pana cand lungimea este 56 bytes modulo 64

  var bitLen = message.length * 8;
  var bitLenBytes = [];
  for (let i = 0; i < 8; i++) {
    bitLenBytes[i] = (bitLen >>> (i * 8)) & 255;
  }
  bytes = bytes.concat(bitLenBytes);
  // apenduieste lungimea msj originakl in bits ca un 64 bit little indian

  for (let i = 0; i < bytes.length; i += 64) {
    var M = bytes.slice(i, i + 64);
    var W = [];
    for (var j = 0; j < 16; j++) {
      W[j] =
        M[j * 4] +
        (M[j * 4 + 1] << 8) +
        (M[j * 4 + 2] << 16) +
        (M[j * 4 + 3] << 24);
    }

    var a = H0;
    var b = H1;
    var c = H2;
    var d = H3;

    for (let j = 0; j < 64; j++) {
      var f, g;
      if (j < 16) {
        f = (b & c) | (~b & d);
        g = j;
      } else if (j < 32) {
        f = (d & b) | (~d & c);
        g = (5 * j + 1) % 16;
      } else if (j < 48) {
        f = b ^ c ^ d;
        g = (3 * j + 5) % 16;
      } else {
        f = c ^ (b | ~d);
        g = (7 * j) % 16;
      }

      var temp = d;
      d = c;
      c = b;
      b =
        b +
        leftRotate(a + f + K[j] + W[g], s[(j % 4) + Math.floor(j / 16) * 4]);
      a = temp;
    }

    H0 = (H0 + a) | 0;
    H1 = (H1 + b) | 0;
    H2 = (H2 + c) | 0;
    H3 = (H3 + d) | 0;
  }

  function toHexString(num) {
    var hex = "";
    for (var i = 0; i < 4; i++) {
      var offset = i * 8;
      hex += ((num >>> offset) & 255).toString(16).padStart(2, "0");
    }
    return hex;
  }

  return toHexString(H0) + toHexString(H1) + toHexString(H2) + toHexString(H3);
};

console.log(md5("Your message here..."));

export default md5;
