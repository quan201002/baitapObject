// var dssv = [];
// var dataJson = localStorage.getItem("DSSV_LOCAL");
// if (dataJson != null) {
//   var result = JSON.parse(dataJson);
//   dssv = result.map(function (item) {
//     return new SinhVien(
//       item.ma,
//       item.ten,
//       item.email,
//       item.matkhau,
//       item.toan,
//       item.van
//     );
//   });
//   render(dssv);
// }
// function kiemtradodai(value, idErr, min, max) {
//   if (min <= value.length && value.length <= max) {
//     document.getElementById(idErr).innerText = "";
//     return true;
//   } else {
//     document.getElementById(
//       idErr
//     ).innerText = `Độ dài phải từ ${min} đến ${max} kí tự`;
//     return false;
//   }
// }
// function kiemtraEmail(email) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   var isValid = re.test(email);
//   if (isValid) {
//     document.getElementById("spanEmailSV").innerText = "";
//     return true;
//   }
//   document.getElementById("spanEmailSV").innerText = "Email không hợp lệ";
//   return false;
// }
// function them() {
//   var ma = document.getElementById("txtMaSV").value;
//   var ten = document.getElementById("txtTenSV").value;
//   var email = document.getElementById("txtEmail").value;
//   var pass = document.getElementById("txtPass").value;
//   var van = document.getElementById("txtDiemVan").value;
//   var toan = document.getElementById("txtDiemToan").value;
//   var sv = new SinhVien(ma, ten, email, pass, van, toan);

//   var isValid =
//     kiemtraSinhvien(sv.ma, dssv) &
//     kiemtradodai(sv.matkhau, "spanMatKhau", 7, 8);
//   // isValid = isValid & kiemtradodai(sv.matkhau, "spanMatkhau", 7, 8);
//   isValid = isValid + kiemtraEmail(email);
//   if (isValid) {
//     dssv.push(sv);
//     var dataJson = JSON.stringify(dssv);
//     localStorage.setItem("DSSV_LOCAL", dataJson);
//     render(dssv);
//   }
// }

// function xua(id) {
//   console.log(id);
// }
// function xoa(id) {
//   /**
//    * splice(vị trí cần xóa, số lượng xóa)
//    * 1.từ id tìm vị trí => findIndex;
//    * 2. Sử dụng splice để remove
//    * 3.update lại layout
//    * indexOf chỉ có thể dùng khi có đủ thông tin của đối tượng
//    */
//   var vitri = dssv.findIndex(function (item) {
//     return item.ma == id;
//   });
//   dssv.splice(vitri, 1);
//   localStorage.setItem("DSSV_LOCAL", JSON.stringify(dssv));
//   render(dssv);
// }
// function kiemtraSinhvien(id, dssv) {
//   var vitri = dssv.findIndex(function (item) {
//     return item.ma == id;
//   });
// }

// function render(dssv) {
//   var contentHTML = "";
//   for (var i = 0; i < dssv.length; i++) {
//     var data = dssv[i];
//     var trString = `<tr>
//     <td>${data.ma}</td>
//     <td>${data.ten}</td>
//     <td>${data.email}</td>
//     <td>${data.tinhDTB(data.toan, data.van)}</td>
//     <td><button class="btn btn-danger" onclick="xoa(${
//       data.ma
//     })">Xoa</button></td>
//     <td><button class="btn btn-danger" onclick="xua(${
//       data.ma
//     })">Xua</button></td>
//     </tr>
//     `;
//     contentHTML += trString;

//     document.getElementById("tbodySinhVien").innerHTML = contentHTML;
//   }
// }

var dssv = [];
var editID = "";
var data = JSON.parse(localStorage.getItem("DSSV_LOCAL"));
dssv = data.map(function (item) {
  return new SinhVien(
    item.ma,
    item.ten,
    item.email,
    item.pass,
    item.toan,
    item.van
  );
});
render(dssv);
function reset() {
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtDiemVan").value = "";
  document.getElementById("txtDiemToan").value = "";
}
function them() {
  var ma = document.getElementById("txtMaSV").value * 1;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var pass = document.getElementById("txtPass").value;
  var van = document.getElementById("txtDiemVan").value * 1;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var sv = new SinhVien(ma, ten, email, pass, van, toan);
  dssv.push(sv);
  localStorage.setItem("DSSV_LOCAL", JSON.stringify(dssv));
  render(dssv);
}
function edit() {
  var vitri = dssv.findIndex(function (item) {
    return item.ma == editID;
  });
  var ma = document.getElementById("txtMaSV").value * 1;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var pass = document.getElementById("txtPass").value;
  var van = document.getElementById("txtDiemVan").value * 1;
  var toan = document.getElementById("txtDiemToan").value * 1;
  document.getElementById("re").disabled = false;
  document.getElementById("add").disabled = false;
  dssv[vitri] = new SinhVien(ma, ten, email, pass, toan, van);
  localStorage.setItem("DSSV_LOCAL", JSON.stringify(dssv));
  render(dssv);
}
function xua(id) {
  document.getElementById("re").disabled = true;
  document.getElementById("add").disabled = true;
  var vitri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  editID = id;
  var ma = document.getElementById("txtMaSV");
  var ten = document.getElementById("txtTenSV");
  var email = document.getElementById("txtEmail");
  var pass = document.getElementById("txtPass");
  var van = document.getElementById("txtDiemVan");
  var toan = document.getElementById("txtDiemToan");
  var ds = JSON.parse(localStorage.getItem("DSSV_LOCAL"));
  ma.value = ds[vitri].ma;
  ten.value = ds[vitri].ten;
  email.value = ds[vitri].email;
  pass.value = ds[vitri].pass;
  van.value = ds[vitri].van;
  toan.value = ds[vitri].toan;
}

function xoa(id) {
  var vitri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  dssv.splice(vitri, 1);
  localStorage.setItem("DSSV_LOCAL", JSON.stringify(dssv));
  render(dssv);
}

function render(dssv) {
  var content = "";
  for (var i = 0; i < dssv.length; i++) {
    var item = dssv[i];
    content += `<tr>
      <td>${item.ma}</td>
      <td>${item.ten}</td>
      <td>${item.email}</td>
      <td>${item.tinhDTB()}</td>
      <td><button class="btn btn-danger" onclick="xoa('${
        item.ma
      }')">Xoa</button></td>
      <td><button class="btn btn-danger" onclick="xua('${item.ma}')">Xua</td>
    </tr>`;
  }
  document.getElementById("tbodySinhVien").innerHTML = content;
}
