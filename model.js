// function SinhVien(_ma, _ten, _email, _matkhau, _toan, _van) {
//   (this.ma = _ma),
//     (this.ten = _ten),
//     (this.email = _email),
//     (this.matkhau = _matkhau),
//     (this.toan = _toan),
//     (this.van = _van),
//     (this.tinhDTB = function (toan, van) {
//       return (this.toan * 1 + this.van * 1) / 2;
//     });
// }
function SinhVien(ma, ten, email, matkhau, toan, van) {
  (this.ma = ma),
    (this.ten = ten),
    (this.email = email),
    (this.pass = matkhau),
    (this.toan = toan),
    (this.van = van),
    (this.tinhDTB = function () {
      return (this.toan * 1 + this.van * 1) / 2;
    });
}
