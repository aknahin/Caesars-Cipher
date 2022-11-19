function rot13(str) {
  const st = [];
  var s;
  for (var i=0; i<str.length; i++) {
    var ascii = str.charCodeAt(i);
    if (ascii>63 && ascii<91) {
      ascii -= 13;
      if (ascii<65) {
        ascii = ascii + 26;
      }
      else {}
      st[i] = String.fromCharCode(ascii);
    }
    else {
      st[i] = str[i];
    }
  }
  return st.join('');
}

rot13("SERR PBQR PNZC");