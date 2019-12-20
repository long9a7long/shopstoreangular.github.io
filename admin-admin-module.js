(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n\r\n  <app-header></app-header>\r\n  <!-- Left side column. contains the logo and sidebar -->\r\n  <app-left-side></app-left-side>\r\n  <router-outlet></router-outlet>\r\n  <!-- Content Wrapper. Contains page content -->\r\n  <!-- /.content-wrapper -->\r\n  <app-footer></app-footer>\r\n\r\n  <!-- Control Sidebar -->\r\n  <app-control-sidebar></app-control-sidebar>\r\n  <!-- /.control-sidebar -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-detail/customer-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-detail/customer-detail.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Thông tin khách hàng\r\n      <span class=\"pull-right\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-block btn-primary\"\r\n          (click)=\"openModal(template)\"\r\n        >\r\n          <i class=\"fa fa-edit\"></i> Sửa KH\r\n        </button>\r\n      </span>\r\n    </h1>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <ng-template #template>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>Sửa thông tin khách hàng</strong>\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close pull-right\"\r\n          aria-label=\"Close\"\r\n          (click)=\"modalRef.hide()\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <!--Form edit KH-->\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"makh\">Mã KH</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"makh\"\r\n              placeholder=\"Mã KH (tự sinh nếu bỏ trống)\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"tenkh\">Tên KH</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"tenkh\"\r\n              placeholder=\"Nhập tên KH (bắt buộc)\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"sdtkh\">Số điện thoại</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"sdtkh\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"diachikh\">Địa chỉ</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"diachikh\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"ngaysinhkh\">Ngày sinh</label>\r\n            <input type=\"datetime\" class=\"form-control\" id=\"ngaysinhkh\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Giới tính</label>\r\n            <div class=\"form-check\">\r\n              <input\r\n                class=\"form-check-input\"\r\n                type=\"radio\"\r\n                name=\"gioitinhkh\"\r\n                id=\"gioitinhnam\"\r\n                value=\"1\"\r\n                checked\r\n              />\r\n              <label class=\"form-check-label\" for=\"gioitinhnam\">\r\n                Nam\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input\r\n                class=\"form-check-input\"\r\n                type=\"radio\"\r\n                name=\"gioitinhkh\"\r\n                id=\"gioitinhnu\"\r\n                value=\"0\"\r\n              />\r\n              <label class=\"form-check-label\" for=\"gioitinhnu\">\r\n                Nữ\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Cập nhật</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!--End form edit KH-->\r\n    </ng-template>\r\n    <div class=\"box\">\r\n      <div class=\"container\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-4\">Tên khách hàng: </label>\r\n                <div class=\"col-md-8\">{{usersdetail.ten}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-4\">Mã khách hàng: </label>\r\n                  <div class=\"col-md-8\">{{usersdetail.makhachhang}}</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-4\">Điện thoại: </label>\r\n                  <div class=\"col-md-8\">{{usersdetail.sdt}}</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-4\">Email: </label>\r\n                  <div class=\"col-md-8\">{{usersdetail.email}}</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-4\">Giới tính: </label>\r\n                  <div class=\"col-md-8\">\r\n                    <span *ngIf=\"usersdetail.gioitinh \">Nam</span>\r\n                    <span *ngIf=\"!usersdetail.gioitinh \">Nữ</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-4\">Ngày sinh: </label>\r\n                  <div class=\"col-md-8\">{{usersdetail.ngaysinh  | date:'medium'}}</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-4\">Địa chỉ: </label>\r\n                  <div class=\"col-md-8\">{{usersdetail.diachi}}</div>\r\n              </div>\r\n          </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <div *ngIf=(isPurchaseHistory)>\r\n        <app-purchase-history (chageToDebt)=\"emitChangeDebt($event)\"></app-purchase-history>\r\n    </div>\r\n    <div *ngIf=(!isPurchaseHistory)>\r\n        <app-debt (chageToPurchaseHistory)=\"emitChangeDebt($event)\" ></app-debt>\r\n    </div>\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-detail/debt/debt.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-detail/debt/debt.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\r\n  Thu nợ\r\n  <span class=\"pull-right\">\r\n    <button type=\"button\" class=\"btn btn-primary mb-2\" (click)=\"toggleToPurchaseHistory(true)\">\r\n      <i class=\"fa fa-cancle\"></i> Hủy\r\n    </button>\r\n  </span>\r\n</h1>\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    <form>\r\n      <div class=\"form-row align-items-center\">\r\n        <div class=\"col-md-4\">\r\n              <div class=\"form-check mb-2\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"typeCheckout\" checked>\r\n                <label class=\"form-check-label\" style=\"margin-right:20px;\">\r\n                   Tiền mặt\r\n                </label>\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"typeCheckout\">\r\n                <label class=\"form-check-label\" style=\"margin-right:20px;\">\r\n                   Thẻ\r\n                </label>\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"typeCheckout\">\r\n                <label class=\"form-check-label\" style=\"margin-right:20px;\">\r\n                  Chuyển khoản\r\n                </label>\r\n              </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" bsDatepicker class=\"form-control mb-2\" name=\"ngaythu\" placeholder=\"Ngày thu\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control  mb-2\" placeholder=\"0\">\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n          <button type=\"submit\" class=\"btn btn-primary mb-2\">Thu tất cả</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Mã đơn hàng</th>\r\n          <th scope=\"col\">Ngày bán</th>\r\n          <th scope=\"col\">Thu ngân</th>\r\n          <th scope=\"col\">Trạng thái</th>\r\n          <th scope=\"col\">Tổng tiền</th>\r\n          <th scope=\"col\">Khách trả</th>\r\n          <th scope=\"col\">Nợ</th>\r\n          <th scope=\"col\">Thu nợ</th>\r\n          <th scope=\"col\">Thu</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-template ngFor let-item [ngForOf]=\"listCusBillDebt\" let-i=\"index\" >\r\n          <tr>\r\n            <th scope=\"row\">{{item.mahoadon}}</th>\r\n            <td scope=\"row\">{{item.createdAt | date: 'medium'}}</td>\r\n            <td scope=\"row\">{{listMethodBill[item.loaithanhtoan]}}</td>\r\n            <td scope=\"row\">{{item.trangthai}}</td>\r\n            <td scope=\"row\">{{item.tonggia | currency:'VND' }}</td>\r\n            <td scope=\"row\">{{item.khachhangtra | currency:'VND' }}</td>\r\n            <td scope=\"row\">{{getDebt(item)}}</td>\r\n            <td>\r\n              <input type=\"number \" class=\"form-control\" value=\"0\" max=\"{{item.tonggia-item.khachhangtra | currency:'VND' }}\" >\r\n            </td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-block btn-primary\" (click)=\"debt(item.mahoadon)\">\r\n                <i class=\"fa fa-plus\"></i> Thu\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"box-footer\">\r\n    <div class=\"d-flex justify-content-between p-2\"></div>\r\n    <div class=\"alert alert-info summany-info clearfix\" role=\"alert\">\r\n      <div class=\"sm-info pull-left\">\r\n        Tổng số đơn hàng: <span>{{getTotalCusBill()}}</span> Tổng tiền: <span>{{getTotalMoney() | currency: \"VND\"}}</span>đ\r\n          Tổng nợ: <span>{{getTotalDebt() | currency: \"VND\"}}</span>đ\r\n      </div> \r\n    </div>\r\n    <div class=\"pull-right\">\r\n      <pagination previousText=\"&lsaquo;\" name=\"currentPage\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\" [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\r\n        [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\r\n        (pageChanged)=\"pageChanged($event)\">\r\n      </pagination>\r\n    </div> \r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-detail/purchase-history/purchase-history.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-detail/purchase-history/purchase-history.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\r\n    Lịch sử mua hàng\r\n    <span class=\"pull-right\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-block btn-primary\"\r\n        (click)=\"toggleToDebt(false)\"\r\n      >\r\n        <i class=\"fa fa-edit\"></i> Thu nợ\r\n      </button>\r\n    </span>\r\n</h1>\r\n<div class=\"box\">\r\n    <div class=\"box-header\"></div>\r\n    <div class=\"box-body\">\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Mã đơn hàng</th>\r\n              <th scope=\"col\">Ngày bán</th>\r\n              <th scope=\"col\">Thu ngân</th>\r\n              <th scope=\"col\">Thanh Toán</th>\r\n              <th scope=\"col\">Tổng tiền</th>\r\n              <th scope=\"col\">Khách trả</th>\r\n              <th scope=\"col\">Nợ</th>\r\n              <th scope=\"col\">Công cụ</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-template ngFor let-item [ngForOf]=\"listCusBill\" let-i=\"index\" >\r\n              <tr>\r\n                <th scope=\"row\">{{item.mahoadon}}</th>\r\n                <td scope=\"row\">{{item.createdAt | date:'medium'}}</td>\r\n                <td scope=\"row\">{{item.nguoitao.ten}}</td> \r\n                <td scope=\"row\">{{listMethodBill[item.loaithanhtoan]}}</td>\r\n                <td scope=\"row\">{{item.tonggia | currency:'VND' }}</td>\r\n                <td scope=\"row\">{{item.khachhangtra | currency:'VND' }}</td>\r\n                <td scope=\"row\">{{ getDebt(item) | currency:'VND' }}</td>\r\n                <td style=\"text-align: center;\">\r\n                  <i title=\"Sửa\" class=\"fa fa-pencil-square-o\" style=\"margin-right: 5px;\"\r\n                  (click)=\"editCustomer(item.id)\"></i>\r\n              </td>\r\n              </tr>\r\n            </ng-template>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"box-footer\">\r\n        <div class=\"d-flex justify-content-between p-2\"></div>\r\n        <div class=\"alert alert-info summany-info clearfix\" role=\"alert\">\r\n          <div class=\"sm-info pull-left\">\r\n            Tổng số đơn hàng: <span>{{getTotalCusBill()}}</span> Tổng tiền: <span>{{getTotalMoney() | currency: \"VND\"}}</span>đ\r\n              Tổng nợ: <span>{{getTotalDebt() | currency: \"VND\"}}</span>đ\r\n          </div> \r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <pagination previousText=\"&lsaquo;\" name=\"currentPage\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\" [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\r\n            [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\r\n            (pageChanged)=\"pageChanged($event)\">\r\n          </pagination>\r\n        </div> \r\n      </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customers.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customers.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Khách hàng\r\n      <span class=\"pull-right\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-block btn-primary\"\r\n          (click)=\"openModal(template)\"\r\n        >\r\n          <i class=\"fa fa-plus\"></i> Tạo KH\r\n        </button>\r\n      </span>\r\n    </h1>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <ng-template #template>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>Tạo mới khách hàng</strong>\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close pull-right\"\r\n          aria-label=\"Close\"\r\n          (click)=\"modalRef.hide()\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <!--Form Add KH-->\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"addCustomersForm\" (ngSubmit)=\"addCustomer()\">\r\n          <!-- <div class=\"form-group\">\r\n            <label for=\"makh\">Mã KH</label>\r\n            <input \r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"makhachhang\"\r\n              formControlName=\"makhachhang\"\r\n              placeholder=\"Nhập mã khách hàng (bắt buộc)\"\r\n            />\r\n          </div> -->\r\n          <div class=\"form-group\">\r\n            <label for=\"tenkh\">Tên KH</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"ten\"\r\n              formControlName=\"ten\"\r\n              placeholder=\"Nhập tên khách hàng (bắt buộc)\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"sdtkh\">Số điện thoại</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"sdt\"\r\n                formControlName=\"sdt\"\r\n                placeholder=\"Nhập số điện thoại (bắt buộc)\"\r\n              />\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <input\r\n                type=\"email\"\r\n                class=\"form-control\"\r\n                id=\"email\"\r\n                formControlName=\"email\"\r\n              />\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"diachikh\">Địa chỉ</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"diachi\"\r\n                formControlName=\"diachi\"\r\n              />\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"ngaysinhkh\">Ngày sinh</label>\r\n              <input\r\n                bsDatepicker\r\n                class=\"form-control\"\r\n                placement=\"top\"\r\n                formControlName=\"ngaysinh\"\r\n              />\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label>Giới tính</label>\r\n              <div class=\"form-check\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gioitinh\" id=\"gioitinhnam\" checked [value]=\"1\"  formControlName=\"gioitinh\">\r\n                  <label class=\"form-check-label\" for=\"gioitinhnam\">\r\n                    Nam\r\n                  </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gioitinh\" id=\"gioitinhnu\" [value]=\"0\" formControlName=\"gioitinh\">\r\n                  <label class=\"form-check-label\" for=\"gioitinhnu\">\r\n                    Nữ\r\n                  </label>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"btn btn-primary\"  >Lưu</button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <!--End form add KH-->\r\n    </ng-template>\r\n    <div class=\"box\">\r\n      <form>\r\n        <div class=\"box-header\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                name=\"searchTerm\"\r\n                [(ngModel)]=\"searchTerm\"\r\n                placeholder=\"Nhập tên khách hàng\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-2\">\r\n              <select class=\"form-control\" [(ngModel)]=\"fitlerloaikhachhang\" (change)=\"filter()\" name=\"fitlerloaikhachhang\"  >\r\n                <option value=\"0\">Tất cả</option>\r\n                <option value=\"1\">KH từng mua hàng</option>\r\n                <option value=\"2\">KH còn nợ</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-md-2\">\r\n              <button type=\"submit\" class=\"form-control btn btn-primary\" (click)=\"search()\">\r\n                Tìm kiếm\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Mã KH</th>\r\n                <th scope=\"col\">Tên KH</th>\r\n                <th scope=\"col\">Điện thoại</th>\r\n                <th scope=\"col\">Địa chỉ</th>\r\n                <th scope=\"col\">Lần cuối mua hàng</th>\r\n                <th scope=\"col\">Tổng tiền hàng</th>\r\n                <th scope=\"col\">Nợ</th>\r\n                <th scope=\"col\">Công cụ</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-template ngFor let-item [ngForOf]=\"listCustomers\" let-i=\"index\">\r\n              <tr>\r\n                <th scope=\"row\">{{item.makhachhang}}</th>\r\n                <td scope=\"row\">{{item.ten}}</td>\r\n                <td scope=\"row\">{{item.sdt}}</td>\r\n                <td scope=\"row\">{{item.diachi}}</td>\r\n                <td scope=\"row\">{{item.createdAt | date:'medium' }}</td>\r\n                <td scope=\"row\">{{item.tonggia | currency:'VND' }}</td>\r\n                <td scope=\"row\">{{item.tongno | currency:'VND' }}</td>\r\n                <td style=\"text-align: center;\">\r\n                    <i title=\"Sửa\" class=\"fa fa-pencil-square-o\" style=\"margin-right: 5px;\"\r\n                    (click)=\"editCustomer(item.makhachhang)\"></i>\r\n                  <i class=\"fa fa-trash-o\" style=\"color: darkred;\" title=\"Xóa\" (click)=\"deleteCustomer(item.makhachhang)\"></i>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n            </tbody>\r\n          </table><div class=\"box-footer\">\r\n          <div class=\"d-flex justify-content-between p-2\"></div>\r\n          <div class=\"alert alert-info summany-info clearfix\" role=\"alert\">\r\n            <div class=\"sm-info pull-left\">\r\n                Số khách hàng: <span>{{getTotalCustomers()}}</span> Tổng tiền: <span>{{getTotalMoney() | currency: \"VND\"}}</span>đ\r\n                Tổng nợ: <span>{{getTotalDet() | currency: \"VND\"}}</span>đ\r\n            </div> \r\n          </div>\r\n          <div class=\"pull-right\">\r\n            <pagination previousText=\"&lsaquo;\" name=\"currentPage\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n              lastText=\"&raquo;\" [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\r\n              [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\r\n              (pageChanged)=\"pageChanged($event)\">\r\n            </pagination>\r\n          </div> \r\n        </div>\r\n        </div>\r\n           \r\n      </form>\r\n    </div>\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Dashboard\r\n      <small>Control panel</small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Dashboard</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <!-- Small boxes (Stat box) -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-aqua\">\r\n          <div class=\"inner\">\r\n            <h3>{{totalBill}}</h3>\r\n\r\n            <p>Tổng đơn hàng</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-bag\"></i>\r\n          </div>\r\n          <a routerLink=\"../orders\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-lg-4 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-green\">\r\n          <div class=\"inner\">\r\n            <h3>{{totalProd}}</h3>\r\n\r\n            <p>Sản phẩm</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-stats-bars\"></i>\r\n          </div>\r\n          <a routerLink=\"../khachhang\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-lg-4 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-yellow\">\r\n          <div class=\"inner\">\r\n            <h3>{{totalCust}}</h3>\r\n\r\n            <p>Khách hàng</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-person-add\"></i>\r\n          </div>\r\n          <a routerLink=\"../khachhang\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/content/content.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/content/content.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Dashboard\n      <small>Control panel</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- Small boxes (Stat box) -->\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-aqua\">\n          <div class=\"inner\">\n            <h3>150</h3>\n\n            <p>New Orders</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-bag\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-green\">\n          <div class=\"inner\">\n            <h3>53<sup style=\"font-size: 20px\">%</sup></h3>\n\n            <p>Bounce Rate</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-stats-bars\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-yellow\">\n          <div class=\"inner\">\n            <h3>44</h3>\n\n            <p>User Registrations</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-person-add\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-red\">\n          <div class=\"inner\">\n            <h3>65</h3>\n\n            <p>Unique Visitors</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-pie-graph\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n    </div>\n    <!-- /.row -->\n    <!-- Main row -->\n    <div class=\"row\">\n      <!-- Left col -->\n      <section class=\"col-lg-7 connectedSortable\">\n        <!-- Custom tabs (Charts with tabs)-->\n        <div class=\"nav-tabs-custom\">\n          <!-- Tabs within a box -->\n          <ul class=\"nav nav-tabs pull-right\">\n            <li class=\"active\"><a href=\"#revenue-chart\" data-toggle=\"tab\">Area</a></li>\n            <li><a href=\"#sales-chart\" data-toggle=\"tab\">Donut</a></li>\n            <li class=\"pull-left header\"><i class=\"fa fa-inbox\"></i> Sales</li>\n          </ul>\n          <div class=\"tab-content no-padding\">\n            <!-- Morris chart - Sales -->\n            <div class=\"chart tab-pane active\" id=\"revenue-chart\" style=\"position: relative; height: 300px;\"></div>\n            <div class=\"chart tab-pane\" id=\"sales-chart\" style=\"position: relative; height: 300px;\"></div>\n          </div>\n        </div>\n        <!-- /.nav-tabs-custom -->\n\n        <!-- Chat box -->\n        <div class=\"box box-success\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-comments-o\"></i>\n\n            <h3 class=\"box-title\">Chat</h3>\n\n            <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"Status\">\n              <div class=\"btn-group\" data-toggle=\"btn-toggle\">\n                <button type=\"button\" class=\"btn btn-default btn-sm active\"><i class=\"fa fa-square text-green\"></i>\n                  </button>\n                <button type=\"button\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-square text-red\"></i></button>\n              </div>\n            </div>\n          </div>\n          <div class=\"box-body chat\" id=\"chat-box\">\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"assets/images/user4-128x128.jpg\" alt=\"user image\" class=\"online\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 2:15</small>\n                    Mike Doe\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\n                They say it is going to be one the best themes on the market\n              </p>\n              <div class=\"attachment\">\n                <h4>Attachments:</h4>\n\n                <p class=\"filename\">\n                  Theme-thumbnail-image.jpg\n                </p>\n\n                <div class=\"pull-right\">\n                  <button type=\"button\" class=\"btn btn-primary btn-sm btn-flat\">Open</button>\n                </div>\n              </div>\n              <!-- /.attachment -->\n            </div>\n            <!-- /.item -->\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"assets/images/user3-128x128.jpg\" alt=\"user image\" class=\"offline\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:15</small>\n                    Alexander Pierce\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\n                They say it is going to be one the best themes on the market\n              </p>\n            </div>\n            <!-- /.item -->\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"assets/images/user2-160x160.jpg\" alt=\"user image\" class=\"offline\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:30</small>\n                    Susan Doe\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\n                They say it is going to be one the best themes on the market\n              </p>\n            </div>\n            <!-- /.item -->\n          </div>\n          <!-- /.chat -->\n          <div class=\"box-footer\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"Type message...\">\n\n              <div class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /.box (chat box) -->\n\n        <!-- TO DO List -->\n        <div class=\"box box-primary\">\n          <div class=\"box-header\">\n            <i class=\"ion ion-clipboard\"></i>\n\n            <h3 class=\"box-title\">To Do List</h3>\n\n            <div class=\"box-tools pull-right\">\n              <ul class=\"pagination pagination-sm inline\">\n                <li><a href=\"#\">&laquo;</a></li>\n                <li><a href=\"#\">1</a></li>\n                <li><a href=\"#\">2</a></li>\n                <li><a href=\"#\">3</a></li>\n                <li><a href=\"#\">&raquo;</a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <ul class=\"todo-list\">\n              <li>\n                <!-- drag handle -->\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <!-- checkbox -->\n                <input type=\"checkbox\" value=\"\">\n                <!-- todo text -->\n                <span class=\"text\">Design a nice theme</span>\n                <!-- Emphasis label -->\n                <small class=\"label label-danger\"><i class=\"fa fa-clock-o\"></i> 2 mins</small>\n                <!-- General tools such as edit or delete-->\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Make the theme responsive</span>\n                <small class=\"label label-info\"><i class=\"fa fa-clock-o\"></i> 4 hours</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-warning\"><i class=\"fa fa-clock-o\"></i> 1 day</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-success\"><i class=\"fa fa-clock-o\"></i> 3 days</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Check your messages and notifications</span>\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1 week</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-default\"><i class=\"fa fa-clock-o\"></i> 1 month</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer clearfix no-border\">\n            <button type=\"button\" class=\"btn btn-default pull-right\"><i class=\"fa fa-plus\"></i> Add item</button>\n          </div>\n        </div>\n        <!-- /.box -->\n\n        <!-- quick email widget -->\n        <div class=\"box box-info\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-envelope\"></i>\n\n            <h3 class=\"box-title\">Quick Email</h3>\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <button type=\"button\" class=\"btn btn-info btn-sm\" data-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\n                  <i class=\"fa fa-times\"></i></button>\n            </div>\n            <!-- /. tools -->\n          </div>\n          <div class=\"box-body\">\n            <form action=\"#\" method=\"post\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" name=\"emailto\" placeholder=\"Email to:\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Subject\">\n              </div>\n              <div>\n                <textarea class=\"textarea\" placeholder=\"Message\" style=\"width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\n              </div>\n            </form>\n          </div>\n          <div class=\"box-footer clearfix\">\n            <button type=\"button\" class=\"pull-right btn btn-default\" id=\"sendEmail\">Send\n                <i class=\"fa fa-arrow-circle-right\"></i></button>\n          </div>\n        </div>\n\n      </section>\n      <!-- /.Left col -->\n      <!-- right col (We are only adding the ID to make the widgets sortable)-->\n      <section class=\"col-lg-5 connectedSortable\">\n\n        <!-- Map box -->\n        <div class=\"box box-solid bg-light-blue-gradient\">\n          <div class=\"box-header\">\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <button type=\"button\" class=\"btn btn-primary btn-sm daterange pull-right\" data-toggle=\"tooltip\" title=\"Date range\">\n                  <i class=\"fa fa-calendar\"></i></button>\n              <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" data-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\"\n                style=\"margin-right: 5px;\">\n                  <i class=\"fa fa-minus\"></i></button>\n            </div>\n            <!-- /. tools -->\n\n            <i class=\"fa fa-map-marker\"></i>\n\n            <h3 class=\"box-title\">\n              Visitors\n            </h3>\n          </div>\n          <div class=\"box-body\">\n            <div id=\"world-map\" style=\"height: 250px; width: 100%;\"></div>\n          </div>\n          <!-- /.box-body-->\n          <div class=\"box-footer no-border\">\n            <div class=\"row\">\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <div id=\"sparkline-1\"></div>\n                <div class=\"knob-label\">Visitors</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <div id=\"sparkline-2\"></div>\n                <div class=\"knob-label\">Online</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\">\n                <div id=\"sparkline-3\"></div>\n                <div class=\"knob-label\">Exists</div>\n              </div>\n              <!-- ./col -->\n            </div>\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box -->\n\n        <!-- solid sales graph -->\n        <div class=\"box box-solid bg-teal-gradient\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-th\"></i>\n\n            <h3 class=\"box-title\">Sales Graph</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n          </div>\n          <div class=\"box-body border-radius-none\">\n            <div class=\"chart\" id=\"line-chart\" style=\"height: 250px;\"></div>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer no-border\">\n            <div class=\"row\">\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"20\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">Mail-Orders</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"50\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">Online</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"30\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">In-Store</div>\n              </div>\n              <!-- ./col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-footer -->\n        </div>\n        <!-- /.box -->\n\n        <!-- Calendar -->\n        <div class=\"box box-solid bg-green-gradient\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-calendar\"></i>\n\n            <h3 class=\"box-title\">Calendar</h3>\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <!-- button with a dropdown -->\n              <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-success btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"fa fa-bars\"></i></button>\n                <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n                  <li><a href=\"#\">Add new event</a></li>\n                  <li><a href=\"#\">Clear events</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">View calendar</a></li>\n                </ul>\n              </div>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n            <!-- /. tools -->\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body no-padding\">\n            <!--The calendar -->\n            <div id=\"calendar\" style=\"width: 100%\"></div>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer text-black\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <!-- Progress bars -->\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #1</span>\n                  <small class=\"pull-right\">90%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\n                </div>\n\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #2</span>\n                  <small class=\"pull-right\">70%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 70%;\"></div>\n                </div>\n              </div>\n              <!-- /.col -->\n              <div class=\"col-sm-6\">\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #3</span>\n                  <small class=\"pull-right\">60%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 60%;\"></div>\n                </div>\n\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #4</span>\n                  <small class=\"pull-right\">40%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 40%;\"></div>\n                </div>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box -->\n\n      </section>\n      <!-- right col -->\n    </div>\n    <!-- /.row (main row) -->\n\n  </section>\n  <!-- /.content -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/control-sidebar/control-sidebar.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/control-sidebar/control-sidebar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aside class=\"control-sidebar control-sidebar-dark\">\n  <!-- Create the tabs -->\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n    <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n  </ul>\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <!-- Home tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                <p>Will be 23 on April 24th</p>\n              </div>\n            </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n                <p>New phone +1(800)555-1234</p>\n              </div>\n            </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n                <p>nora@example.com</p>\n              </div>\n            </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n                <p>Execution time 5 seconds</p>\n              </div>\n            </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Custom Template Design\n              <span class=\"label label-danger pull-right\">70%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Update Resume\n              <span class=\"label label-success pull-right\">95%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Laravel Integration\n              <span class=\"label label-warning pull-right\">50%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Back End Framework\n              <span class=\"label label-primary pull-right\">68%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n    </div>\n    <!-- /.tab-pane -->\n    <!-- Stats tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n    <!-- /.tab-pane -->\n    <!-- Settings tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n      <form method=\"post\">\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n          <p>\n            Some information about this general settings option\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n          <p>\n            Other sets of options are available\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n          <p>\n            Allow the user to show his name in blog posts\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n            </label>\n        </div>\n        <!-- /.form-group -->\n      </form>\n    </div>\n    <!-- /.tab-pane -->\n  </div>\n</aside>\n<!-- Add the sidebar's background. This div must be placed\n       immediately after the control sidebar -->\n<div class=\"control-sidebar-bg\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/footer/footer.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/footer/footer.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <b>Version</b> 1.0.0\n  </div>\n  <strong>Copyright &copy; 2019-2020 <a href=\"#\">Team Java</a>.</strong> All rights reserved.\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/header/header.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/header/header.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"main-header\">\r\n    <!-- Logo -->\r\n    <a href=\"#\" class=\"logo\">\r\n      <!-- mini logo for sidebar mini 50x50 pixels -->\r\n      <span class=\"logo-mini\"><b>A</b>LT</span>\r\n      <!-- logo for regular state and mobile devices -->\r\n      <span class=\"logo-lg\"><b>Admin</b>LTE</span>\r\n    </a>\r\n    <!-- Header Navbar: style can be found in header.less -->\r\n    <nav class=\"navbar navbar-static-top\">\r\n      <!-- Sidebar toggle button-->\r\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n        </a>\r\n\r\n      <div class=\"navbar-custom-menu\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <!-- User Account: style can be found in dropdown.less -->\r\n          <li class=\"dropdown user user-menu\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <img src=\"assets/images/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\r\n                <span class=\"hidden-xs\">{{currentUser.ten}}</span>\r\n              </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <!-- User image -->\r\n              <li class=\"user-header\">\r\n                <img src=\"assets/images/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n\r\n                <p>\r\n                  {{currentUser.ten}}\r\n                  <small>{{currentUser.ngaysinh}}</small>\r\n                </p>\r\n              </li>\r\n              <!-- Menu Body -->\r\n              <li class=\"user-body\">\r\n\r\n              </li>\r\n              <!-- Menu Footer-->\r\n              <li class=\"user-footer\">\r\n                <div class=\"pull-left\">\r\n                  <a [routerLink]=\"['/admin/profile']\"  class=\"btn btn-default btn-flat\">Profile</a>\r\n                </div>\r\n                <div class=\"pull-right\">\r\n                  <button class=\"btn btn-default btn-flat\" (click)=\"logOut()\">Log out</button>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/left-side/left-side.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/left-side/left-side.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aside class=\"main-sidebar\">\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n    <!-- sidebar menu: : style can be found in sidebar.less -->\r\n    <ul class=\"sidebar-menu\">\r\n      <li class=\"header\">MAIN NAVIGATION</li>\r\n      <li class=\"active treeview\">\r\n        <a routerLink=\"dashboard\"> <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span> </a>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a routerLink=\"/admin/customers\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-user\"></i> <span>Khách hàng</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a routerLink=\"orders\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-pie-chart\"></i>\r\n          <span>Đơn hàng</span>\r\n          <span class=\"pull-right-container\">\r\n            <i class=\"fa fa-angle-left pull-right\"></i>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li>\r\n            <a [routerLink]=\"['/admin/orders']\" routerLinkActive=\"active\"\r\n              ><i class=\"fa fa-circle-o\"></i> Danh sách đơn hàng</a\r\n            >\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/admin/sell-prod']\" routerLinkActive=\"active\"\r\n              ><i class=\"fa fa-circle-o\"></i> Bán hàng</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a [routerLink]=\"['/admin/products']\" routerLinkActive=\"active\" >\r\n          <i class=\"fa fa-laptop\"></i>\r\n          <span>Sản phẩm</span>\r\n          <span class=\"pull-right-container\">\r\n            <i class=\"fa fa-angle-left pull-right\"></i>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li>\r\n            <a [routerLink]=\"['/admin/products']\" routerLinkActive=\"active\"\r\n              ><i class=\"fa fa-circle-o\"></i> Danh sách</a\r\n            >\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/admin/categories-prod']\" routerLinkActive=\"active\"\r\n              ><i class=\"fa fa-circle-o\"></i> Danh mục sản phẩm</a\r\n            >\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/admin/manuf-prod']\" routerLinkActive=\"active\"\r\n              ><i class=\"fa fa-circle-o\"></i> Nhà sản xuất</a\r\n            >\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/admin/suppliers-prod']\" routerLinkActive=\"active\"\r\n              ><i class=\"fa fa-circle-o\"></i> Nhà cung cấp</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/edit-order/edit-order.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/edit-order/edit-order.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <section class=\"content-header\">\n      <div class=\"row\">\n        <div class=\"orders-act\">\n          <div class=\"col-md-4 col-md-offset-2\">\n            <div class=\"left-action text-left clearfix\">\n              <h2>Đơn hàng »</h2>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"right-action text-right\">\n              <div class=\"btn-groups\">\n                <button\n                *ngIf=\"hoadonbanhang.trangthai!=3 && hoadonbanhang.trangthai!=5\"\n                class=\"btn btn-success\"\n                (click)=\"completeBill()\"><i class=\"fa fa-check\"></i> Hoàn thành\n                </button>\n                <button\n                *ngIf=\"hoadonbanhang.trangthai!=2 && hoadonbanhang.trangthai!=5 && hoadonbanhang.trangthai!=3\"\n                class=\"btn btn-info\" (click)=\"deliveringBill()\"><i class=\"fa fa-truck\"></i> Đang giao\n                </button>\n                <button\n                *ngIf=\"hoadonbanhang.trangthai!=4 && hoadonbanhang.trangthai!=5 && hoadonbanhang.trangthai!=3\"\n                class=\"btn btn-warning\" (click)=\"onHoldBill()\"><i class=\"fa fa-pause\"></i> Tạm dừng\n                </button>\n                <button\n                *ngIf=\"hoadonbanhang.trangthai!=5\"\n                class=\"btn btn-danger\" (click)=\"cancleBill()\"><i class=\"fa fa-ban\"></i> Hủy\n                </button>\n                <button\n                *ngIf=\"hoadonbanhang.trangthai!=3 && hoadonbanhang.trangthai!=5\"\n                class=\"btn btn-primary\" (click)=\"checkoutBill()\"><i class=\"fa fa-save\"></i> Lưu\n                </button>\n                <a routerLink=\"../../orders\">\n                  <button class=\"btn-back btn btn-default\" type=\"button\"><i class=\"fa fa-arrow-left\"></i> Thoát\n                  </button>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n\n    <!-- Main content -->\n    <section class=\"content\">\n      <ng-template #template>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">\n            <strong>Tạo mới khách hàng</strong>\n          </h4>\n          <button\n            type=\"button\"\n            class=\"close pull-right\"\n            aria-label=\"Close\"\n            (click)=\"modalRef.hide()\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <!--Form Add KH-->\n        <div class=\"modal-body\">\n          <form [formGroup]=\"addCustomersForm\" (ngSubmit)=\"addCustomer()\">\n            <!-- <div class=\"form-group\">\n              <label for=\"makh\">Mã KH</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"makhachhang\"\n                formControlName=\"makhachhang\"\n                placeholder=\"Nhập mã khách hàng (bắt buộc)\"\n              />\n            </div> -->\n            <div class=\"form-group\">\n              <label for=\"tenkh\">Tên KH</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ten\"\n                formControlName=\"ten\"\n                placeholder=\"Nhập tên khách hàng (bắt buộc)\"\n              />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"sdtkh\">Số điện thoại</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"sdt\"\n                  formControlName=\"sdt\"\n                  placeholder=\"Nhập số điện thoại (bắt buộc)\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input\n                  type=\"email\"\n                  class=\"form-control\"\n                  id=\"email\"\n                  formControlName=\"email\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"diachikh\">Địa chỉ</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"diachi\"\n                  formControlName=\"diachi\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"ngaysinhkh\">Ngày sinh</label>\n                <input\n                  bsDatepicker\n                  class=\"form-control\"\n                  placement=\"top\"\n                  formControlName=\"ngaysinh\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <label>Giới tính</label>\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"gioitinh\" id=\"gioitinhnam\" checked [value]=\"1\"  formControlName=\"gioitinh\">\n                    <label class=\"form-check-label\" for=\"gioitinhnam\">\n                      Nam\n                    </label>\n                </div>\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"gioitinh\" id=\"gioitinhnu\" [value]=\"0\" formControlName=\"gioitinh\">\n                    <label class=\"form-check-label\" for=\"gioitinhnu\">\n                      Nữ\n                    </label>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\"  >Lưu</button>\n            </div>\n\n          </form>\n        </div>\n        <!--End form add KH-->\n      </ng-template>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"order-search\" style=\"margin: 10px 0px; position: relative;\">\n            <ng-template #customItemTemplate let-model=\"item\" let-index=\"index\">\n              <h5><img src=\"{{model.anhsp}}\" width=\"150px\">{{model.masp}}-{{model.tensp}}-{{model.giaban | currency: \"VND\"}}- SL:{{model.soluong}}</h5>\n            </ng-template>\n\n            <input [(ngModel)]=\"asyncSelected\"\n                    [typeaheadAsync]=\"true\"\n                    [typeahead]=\"dataSource\"\n                    (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                    (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n                    [typeaheadItemTemplate]=\"customItemTemplate\"\n                    [typeaheadOptionsLimit]=\"7\"\n                    [typeaheadScrollable]=\"true\"\n                    typeaheadOptionField=\"masp\"\n                    placeholder=\"Nhập mã sp hoặc tên sp\"\n                    class=\"form-control\">\n              <div *ngIf=\"typeaheadLoading\">Loading</div>\n          </div>\n\n          <div class=\"product-results\">\n            <table class=\"table table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">STT</th>\n                  <th>Mã sản phẩm</th>\n                  <th>Tên sản phẩm</th>\n                  <th>Ảnh sản phẩm</th>\n                  <th class=\"text-center\">Số lượng</th>\n                  <th class=\"text-center\">Giá bán</th>\n                  <th class=\"text-center\">Giảm giá</th>\n                  <th class=\"text-center\">Thành tiền</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor = \"let chitiet of listchitiethoadon; index as i\">\n                    <th class=\"text-center\">{{ i }}</th>\n                    <th>{{chitiet.sanpham.masp}}</th>\n                    <th>{{chitiet.sanpham.tensp}}</th>\n                    <th><img src=\"{{chitiet.sanpham.anhsp}}\" width=\"50px\"></th>\n                    <th class=\"text-center\">\n                      <input\n                      type=\"number\"\n                      name=\"soluongsp\"\n                      [(ngModel)]=\"chitiet.soluong\"\n                      class=\"form-control\"\n                      />\n                    </th>\n                    <th class=\"text-center\">{{chitiet.sanpham.giaban | currency: \"VND\"}}</th>\n                    <th class=\"text-center\">\n                        <input\n                        type=\"number\"\n                        name=\"giamgiasp\"\n                        [(ngModel)]=\"chitiet.giamgia\"\n                        class=\"form-control\"\n                        />\n                    </th>\n                    <th class=\"text-center\">{{chitiet.sanpham.giaban*chitiet.soluong -chitiet.giamgia| currency: \"VND\"}}</th>\n                    <th style=\"text-align: center;\">\n                      <i class=\"fa fa-trash-o\" style=\"color: darkred;\" title=\"Xóa\" (click)=\"deleteChitietBill(i)\"></i>\n                    </th>\n                  </tr>\n              </tbody>\n            </table>\n            <div class=\"alert alert-success\" role=\"alert\" style=\"margin-top: 30px;\">Gõ mã hoặc tên sản phẩm vào hộp\n              tìm kiếm để thêm hàng vào đơn hàng\n            </div>\n            <!--Show list phieuthu-->\n            <table class=\"table table-bordered table-striped\" *ngIf=\"hoadonbanhang.phieuthus.length!=0\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">STT</th>\n                  <th>Mã phiếu thu</th>\n                  <th>Ngày thu</th>\n                  <th class=\"text-center\">Số tiền thu</th>\n                  <th class=\"text-center\">Hình thức thu</th>\n                </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor = \"let chitiet of hoadonbanhang.phieuthus; index as i\">\n                    <th class=\"text-center\">{{ i }}</th>\n                    <th class=\"text-center\">{{ chitiet.maphieuthu }}</th>\n                    <th class=\"text-center\">{{ chitiet.ngaythu | date:'medium'}}</th>\n                    <th class=\"text-center\">{{ chitiet.sotienthu | currency: \"VND\"}}</th>\n                    <th class=\"text-center\">{{ listMethodBill[chitiet.hinhthucthu] }}</th>\n                  </tr>\n              </tbody>\n            </table>\n            <!--end Show list phieuthu-->\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"morder-info\" style=\"padding: 4px;\">\n                <div class=\"tab-contents\" style=\"padding: 8px 6px;\">\n                  <div class=\"form-group marg-bot-10 clearfix\">\n                    <div class=\"col-md-4\" style=\"padding:0px\">\n                      <label>Khách hàng</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                      <div class=\"col-md-10 padd-0\" style=\"position: relative; padding-left: 0;\">\n                        <ng-template #customItemTemplateKhachHang let-model=\"item\" let-index=\"index\">\n                          <h6>{{model.makhachhang}}</h6>\n                          <p><strong>{{model.ten}}</strong></p>\n                          <p>{{model.sdt}}</p>\n                        </ng-template>\n                          <input [(ngModel)]=\"asyncSelectedKhachHang\"\n                          [typeaheadAsync]=\"true\"\n                          [typeahead]=\"dataSourceKhachHang\"\n                          (typeaheadOnSelect)=\"typeaheadOnSelectKhachHang($event)\"\n                          [typeaheadItemTemplate]=\"customItemTemplateKhachHang\"\n                          [typeaheadOptionsLimit]=\"7\"\n                          [typeaheadScrollable]=\"true\"\n                          typeaheadOptionField=\"makhachhang\"\n                          placeholder=\"Tìm khách hàng\"\n                          class=\"form-control\"\n                          style=\"border-radius: 3px 0 0 3px !important;\">\n                          <div *ngIf=\"typeaheadLoading\">Loading</div>\n                          <span class=\"del-cys\"\n                          style=\"color: red; position: absolute; right: 5px; top:5px; \"></span>\n\n                        <div id=\"cys-suggestion-box\"\n                          style=\"border: 1px solid #444; display: none; overflow-y: auto;background-color: #fff; z-index: 2 !important; position: absolute; left: 0; width: 100%; padding: 5px 0px; max-height: 400px !important;\">\n                          <div class=\"search-cys-inner\"></div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2 padd-0\">\n                        <button class=\"btn btn-primary\"\n                          style=\"border-radius: 0 3px 3px 0; box-shadow: none; padding: 7px 11px;\" type=\"button\"\n                          (click)=\"openModal(template)\">\n                          +\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group marg-bot-10 clearfix\">\n                    <div class=\"col-md-4\" style=\"padding:0px\">\n                      <label>NV bán hàng</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                      <input name=\"nvbanhang\" class=\"form-control\" disabled value=\"{{hoadonbanhang.nguoitao.ten}}\">\n                    </div>\n                  </div>\n                  <div class=\"form-group marg-bot-10 clearfix\">\n                    <div class=\"col-md-4\" style=\"padding:0px\">\n                      <label>Ghi chú</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                      <textarea name=\"ghichu\" class=\"form-control\" [(ngModel)]=\"ghichu\"></textarea>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <h4 class=\"lighter\" style=\"margin-top: 0;\">\n                <i class=\"fa fa-info-circle blue\"></i>\n                Thông tin thanh toán\n              </h4>\n\n              <div class=\"morder-info\" style=\"padding: 4px;\">\n                <div class=\"tab-contents\" style=\"padding: 8px 6px;\">\n                  <div class=\"form-group marg-bot-10 clearfix\">\n                    <div class=\"col-md-4\">\n                      <label>Hình thức</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                      <div class=\"input-group\">\n                        <input name=\"method-pay\" class=\"payment-method\" type=\"radio\" [value]=\"1\"\n                        [(ngModel)]=\"methodPay\">\n                        Tiền mặt &nbsp;\n                        <input name=\"method-pay\" class=\"payment-method\" type=\"radio\" [value]=\"2\"\n                        [(ngModel)]=\"methodPay\"> Thẻ&nbsp;\n                        <input name=\"method-pay\" class=\"payment-method\" type=\"radio\" [value]=\"3\"\n                        [(ngModel)]=\"methodPay\"> CK&nbsp;\n                      </div>\n\n                    </div>\n                  </div>\n                  <div class=\"form-group marg-bot-10 clearfix\">\n                    <div class=\"col-md-4\">\n                      <label>Tiền hàng</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                      <div class=\"total-money\">\n                        {{getTotalProdCost() | currency: \"VND\"}}\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group marg-bot-10 clearfix\">\n                    <div class=\"col-md-4\">\n                      <label>Giảm giá</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                      <input class=\"form-control text-right\"\n                      style=\"border-radius: 0 !important;\"\n                      type=\"number\"\n                      placeholder=\"0\"\n                      name=\"giamgiaBill\"\n                      [(ngModel)] = \"giamgiaBill\">\n                    </div>\n                  </div>\n                  <div class=\"form-group marg-bot-10 clearfix\">\n                    <div class=\"col-md-4\">\n                      <label>Tổng cộng</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                      <div class=\"total-after-discount\">\n                        {{getTotalCost() | currency: \"VND\"}}\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group marg-bot-10 clearfix\">\n                    <div class=\"col-md-4 padd-right-0\">\n                      <label>Khách đưa</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                      <input class=\"form-control text-right\"\n                      style=\"border-radius: 0 !important;\"\n                      type=\"number\"\n                      placeholder=\"0\"\n                      name=\"khachduaBill\"\n                      [(ngModel)] = \"khachduaBill\">\n                    </div>\n                  </div>\n                  <div class=\"form-group marg-bot-10 clearfix\">\n                    <div class=\"col-md-4\">\n                      <label>Còn nợ</label>\n                    </div>\n                    <div class=\"col-md-8\">\n                      <div>{{getDebt() | currency: \"VND\"}}</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"btn-groups pull-right\" style=\"margin-bottom: 50px;\">\n                <button\n                *ngIf=\"hoadonbanhang.trangthai!=3 && hoadonbanhang.trangthai!=5\"\n                class=\"btn btn-primary\" (click)=\"checkoutBill()\"><i class=\"fa fa-save\"></i> Lưu\n                </button>\n                <a routerLink=\"../../orders\">\n                  <button class=\"btn-back btn btn-default\" type=\"button\"><i class=\"fa fa-arrow-left\"></i> Thoát\n                  </button>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/orders.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/orders.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Danh sách đơn hàng\r\n      <span class=\"pull-right\">\r\n        <a class=\"btn btn-block btn-primary\" routerLink=\"../sell-prod\">\r\n          <i class=\"fa fa-edit\"></i> Bán hàng\r\n        </a>\r\n      </span>\r\n    </h1>\r\n  </section>\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"box\">\r\n      <form>\r\n        <div class=\"box-header\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-3\">\r\n              <input class=\"form-control\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"searchTerm\"\r\n                placeholder=\"Nhập mã đơn hàng để tìm kiếm\" />\r\n            </div>\r\n            <div class=\"form-group col-md-9 padd-0\" style=\"padding-left: 5px;\">\r\n              <div class=\"col-md-9 padd-0\">\r\n                <div class=\"col-md-4 padd-0\">\r\n                  <select class=\"form-control\"  [(ngModel)]=\"fitlerloaidonhang\" (change)=\"filter()\"\r\n                  name=\"fitlerloaidonhang\" >\r\n                    <option value=\"0\">Đơn hàng</option>\r\n                    <option value=\"1\">Đơn hàng đã trả hết</option>\r\n                    <option value=\"2\">Đơn hàng còn nợ</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-md-5 padd-0\" style=\"padding-left: 5px;\">\r\n                  <div class=\"input-daterange input-group\">\r\n                    <input class=\"input-sm form-control\" name=\"fromdate\" type=\"text\" [(ngModel)]=\"fromdate\" bsDatepicker\r\n                      placeholder=\"Từ ngày\">\r\n                    <span class=\"input-group-addon\">to</span>\r\n                    <input class=\"input-sm form-control\" name=\"todate\" type=\"text\" [(ngModel)]=\"todate\" bsDatepicker\r\n                      placeholder=\"Đến ngày\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 padd-0\" style=\"padding-left: 5px;\">\r\n                  <button class=\"btn btn-primary btn-large\" style=\"box-shadow: none;\" (click)=\"search()\"><i\r\n                      class=\"fa fa-search\"></i> Tìm kiếm\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 padd-0\" style=\"padding-left: 5px;\">\r\n                <div class=\"btn-group order-btn-calendar\" style=\"width: max-content;\">\r\n                  <button class=\"btn btn-default\" (click)=\"getBillOfWeek()\">Tuần</button>\r\n                  <button class=\"btn btn-default\" (click)=\"getBillOfMonth()\">Tháng</button>\r\n                  <button class=\"btn btn-default\" (click)=\"getBillOfYear()\">Năm</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Mã đơn hàng</th>\r\n                <th scope=\"col\">Ngày bán</th>\r\n                <th scope=\"col\">Thu ngân</th>\r\n                <th scope=\"col\">Khách hàng</th>\r\n                <th scope=\"col\">Trạng thái</th>\r\n                <th scope=\"col\">Tổng tiền</th>\r\n                <th scope=\"col\">Nợ</th>\r\n                <th scope=\"col\">Công cụ</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-template ngFor let-item [ngForOf]=\"listBills\" let-i=\"index\">\r\n                <tr>\r\n                  <th scope=\"row\"\r\n                  (click) = \"toggleChiTietHoaDon(i)\"\r\n                  >{{item.mahoadon}}</th>\r\n                  <td scope=\"row\">{{item.createdAt | date:'medium'}}</td>\r\n                  <td scope=\"row\">{{item.nguoitao.ten}}</td>\r\n                  <td scope=\"row\">{{item.khachhang.ten}}</td>\r\n                  <td scope=\"row\">{{listStatusBill[item.trangthai]}}</td>\r\n                  <td scope=\"row\">{{item.tonggia | currency: \"VND\"}}</td>\r\n                  <td scope=\"row\">{{getDebt(item) | currency: \"VND\"}}</td>\r\n                  <td style=\"text-align: center;\">\r\n                    <i title=\"Sửa\" class=\"fa fa-pencil-square-o\" style=\"margin-right: 5px;\"\r\n                      (click)=\"editBill(item.id)\"></i>\r\n                    <i class=\"fa fa-trash-o\" style=\"color: darkred;\" title=\"Xóa\" (click)=\"deleteBill(item.id)\"></i>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"listSubTrTableBill[i]\">\r\n                  <td colspan=\"15\">\r\n                    <div class=\"tabbable\">\r\n                      <ul class=\"nav nav-tabs\">\r\n                        <li class=\"active\">\r\n                          <a data-toggle=\"tab\">\r\n                            <i class=\"green icon-reorder bigger-110\"></i>\r\n                            Chi tiết đơn hàng\r\n                          </a>\r\n                        </li>\r\n                      </ul>\r\n                      <div class=\"tab-content\">\r\n                        <div class=\"tab-pane active\">\r\n                          <div class=\"alert alert-success clearfix\" style=\"display: flex;\">\r\n                            <div>\r\n                              <i class=\"fa fa-cart-arrow-down\">\r\n                              </i>\r\n                              <span class=\"hidden-768\">Số lượng SP:\r\n                              </span>\r\n                              <label>{{getTotalChiTietBillByIdBill(item)}} </label>\r\n                            </div>\r\n                            <div class=\"padding-left-10\">\r\n                              <span class=\"hidden-768\">Tiền hàng:\r\n                              </span>\r\n                              <label>{{item.tonggia | currency: \"VND\"}} </label>\r\n                            </div>\r\n                            <div class=\"padding-left-10\">\r\n                              <span class=\"hidden-768\">Giảm giá:\r\n                              </span>\r\n                              <label>{{item.giamgia | currency: \"VND\"}} </label>\r\n                            </div>\r\n                            <div class=\"padding-left-10\">\r\n                              <span class=\"hidden-768\">Tổng tiền:\r\n                              </span>\r\n                              <label>{{item.tonggia - item.giamgia | currency: \"VND\"}} </label>\r\n                            </div>\r\n                            <div class=\"padding-left-10\">\r\n                              <i class=\"fa fa-clock-o\"></i>\r\n                              <span class=\"hidden-768\">Còn nợ: </span>\r\n                              <label>{{getDebt(item) | currency: \"VND\"}} </label>\r\n                            </div>\r\n                          </div>\r\n                          <table class=\"table table-striped table-bordered table-hover dataTable\">\r\n                            <thead>\r\n                              <tr role=\"row\">\r\n                                <th class=\"text-center\">STT</th>\r\n                                <th class=\"text-left hidden-768\">Mã sản phẩm</th>\r\n                                <th class=\"text-left\">Tên sản phẩm</th>\r\n                                <th class=\"text-center\">Hình ảnh</th>\r\n                                <th class=\"text-center\">Số lượng</th>\r\n                                <th class=\"text-center\">ĐVT</th>\r\n                                <th class=\"text-center\">Giá bán</th>\r\n                                <th class=\"text-center \">Thành tiền</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr *ngFor = \"let prod of item.chitiethoadons\">\r\n                                <td class=\"text-center width-5 hidden-320 \">\r\n                                  1 </td>\r\n                                <td class=\"text-left hidden-768\">\r\n                                  {{prod.sanpham.masp}} </td>\r\n                                <td class=\"text-left \">\r\n                                  {{prod.sanpham.tensp}} </td>\r\n                                <td class=\"text-center zoomin\">\r\n                                  <img height=\"30\" src=\"{{prod.sanpham.anhsp}}\">\r\n                                </td>\r\n\r\n                                <td class=\"text-center\">\r\n                                  {{prod.soluong}} </td>\r\n                                <td class=\"text-center\">\r\n                                  {{prod.sanpham.donvitinh}} </td>\r\n                                <td class=\"text-center\">\r\n                                  {{prod.sanpham.giaban | currency: \"VND\"}} </td>\r\n                                <td class=\"text-center\">\r\n                                  {{prod.gia * prod.soluong | currency: \"VND\"}} </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"box-footer\">\r\n          <div class=\"d-flex justify-content-between p-2\"></div>\r\n          <div class=\"alert alert-info summany-info clearfix\" role=\"alert\">\r\n            <div class=\"sm-info pull-left\">\r\n              Tổng số đơn hàng: <span>{{getTotalBills()}}</span> Tổng tiền:\r\n              <span>{{getTotal() | currency: \"VND\"}}</span>\r\n              Tổng nợ: <span>{{getTotalDebt() | currency: \"VND\"}}</span>\r\n            </div>\r\n            <div class=\"pull-right\">\r\n              <pagination previousText=\"&lsaquo;\" name=\"currentPage\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n                lastText=\"&raquo;\" [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\r\n                [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\r\n                (pageChanged)=\"pageChanged($event)\">\r\n              </pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/sell-prod/choose-prod/choose-prod.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/sell-prod/choose-prod/choose-prod.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">\n    <strong>Chọn sản phẩm</strong>\n  </h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row form-inline text-center margin-bottom-20\">\n      <div class=\"form-group mb-4\">\n          <input type=\"text\" name=\"searchProdKey\" [(ngModel)]=\"searchProdKey\"  class=\"form-control\" (ngModelChange)=\"filterProd($event)\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-9\">\n        <div class=\"col-lg-4\" *ngFor=\"let item of listProd\" >\n          <div [ngClass]=\"{'card':true, 'text-center':true,'is-selected': currentProd.id ==item.id} \" (click) = \"changeCurrentProd(item)\">\n            <img src=\"{{item.anhsp}}\" class=\"card-img-top\" alt=\"{{item.tensp}}\" width=\"100%\" height=\"100px\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\"><strong>{{item.tensp}}</strong></h5>\n              <p class=\"card-text red\">{{item.giaban | currency: \"VND\"}}</p>\n              <button class=\"btn btn-success\" (click) = \"submitAddProd(item.masp)\">Thêm</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"col-lg-3 shadow-left\">\n        <h4>Chi tiết sản phẩm</h4>\n        <p>Tên: {{currentProd.tensp}}</p>\n        <p>Số lượng tồn kho: {{currentProd.soluong}}</p>\n        <p>Giá bán: {{currentProd.giaban}}</p>\n        <p>Danh mục: <span *ngFor=\"let cate of currentProd.chitietdanhmuc\">{{cate.danhmucsp.tendanhmuc}}, </span></p>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/sell-prod/sell-prod.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/sell-prod/sell-prod.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <div class=\"row\">\n      <div class=\"orders-act\">\n        <div class=\"col-md-4 col-md-offset-2\">\n          <div class=\"left-action text-left clearfix\">\n            <h2>Đơn hàng »</h2>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"right-action text-right\">\n            <div class=\"btn-groups\">\n              <button class=\"btn btn-info margin-right-10\" (click)=\"initBill()\"><i class=\"fa fa-plus\"></i> Khởi tạo\n              </button>\n              <button class=\"btn btn-primary margin-right-10\" (click)=\"checkoutBill()\"><i class=\"fa fa-credit-card\"></i> Thanh toán\n              </button>\n              <button class=\"btn btn-success margin-right-10\" (click)=\"completeBill()\"><i class=\"fa fa-check\"></i> Hoàn thành\n              </button>\n              <a routerLink=\"../orders\">\n                <button class=\"btn-back btn btn-default\" type=\"button\"><i class=\"fa fa-arrow-left\"></i> Thoát\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <ng-template #template>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">\n          <strong>Tạo mới khách hàng</strong>\n        </h4>\n        <button\n          type=\"button\"\n          class=\"close pull-right\"\n          aria-label=\"Close\"\n          (click)=\"modalRef.hide()\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!--Form Add KH-->\n      <div class=\"modal-body\">\n        <form [formGroup]=\"addCustomersForm\" (ngSubmit)=\"addCustomer()\">\n          <!-- <div class=\"form-group\">\n            <label for=\"makh\">Mã KH</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"makhachhang\"\n              formControlName=\"makhachhang\"\n              placeholder=\"Nhập mã khách hàng (bắt buộc)\"\n            />\n          </div> -->\n          <div class=\"form-group\">\n            <label for=\"tenkh\">Tên KH</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"ten\"\n              formControlName=\"ten\"\n              placeholder=\"Nhập tên khách hàng (bắt buộc)\"\n            />\n          </div>\n          <div class=\"form-group\">\n              <label for=\"sdtkh\">Số điện thoại</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"sdt\"\n                formControlName=\"sdt\"\n                placeholder=\"Nhập số điện thoại (bắt buộc)\"\n              />\n          </div>\n          <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input\n                type=\"email\"\n                class=\"form-control\"\n                id=\"email\"\n                formControlName=\"email\"\n              />\n          </div>\n          <div class=\"form-group\">\n              <label for=\"diachikh\">Địa chỉ</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"diachi\"\n                formControlName=\"diachi\"\n              />\n          </div>\n          <div class=\"form-group\">\n              <label for=\"ngaysinhkh\">Ngày sinh</label>\n              <input\n                bsDatepicker\n                class=\"form-control\"\n                placement=\"top\"\n                formControlName=\"ngaysinh\"\n              />\n          </div>\n          <div class=\"form-group\">\n              <label>Giới tính</label>\n              <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gioitinh\" id=\"gioitinhnam\" checked [value]=\"1\"  formControlName=\"gioitinh\">\n                  <label class=\"form-check-label\" for=\"gioitinhnam\">\n                    Nam\n                  </label>\n              </div>\n              <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gioitinh\" id=\"gioitinhnu\" [value]=\"0\" formControlName=\"gioitinh\">\n                  <label class=\"form-check-label\" for=\"gioitinhnu\">\n                    Nữ\n                  </label>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary\"  >Lưu</button>\n          </div>\n\n        </form>\n      </div>\n      <!--End form add KH-->\n    </ng-template>\n    <!--Choose Prod-->\n    <ng-template #templateChooseProd>\n      <app-choose-prod (SubmitChooseProd)=\"emitSubmitChooseProd($event)\" [listProd]=\"this.statesComplex\"></app-choose-prod>\n    </ng-template>\n\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"order-search\" style=\"margin: 10px 0px; position: relative;\">\n          <ng-template #customItemTemplate let-model=\"item\" let-index=\"index\">\n            <h5><img src=\"{{model.anhsp}}\" width=\"150px\">{{model.masp}}-{{model.tensp}}-{{model.giaban | currency: \"VND\"}}- SL:{{model.soluong}}</h5>\n          </ng-template>\n\n          <input [(ngModel)]=\"asyncSelected\"\n                  [typeaheadAsync]=\"true\"\n                  [typeahead]=\"dataSource\"\n                  (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                  (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n                  [typeaheadItemTemplate]=\"customItemTemplate\"\n                  [typeaheadOptionsLimit]=\"7\"\n                  [typeaheadScrollable]=\"true\"\n                  typeaheadOptionField=\"masp\"\n                  placeholder=\"Nhập mã sp, tên sp hoặc nhấn F2 \"\n                  (keydown.f2) = \"showPopupChooseProd($event,templateChooseProd)\"\n                  class=\"form-control\">\n            <div *ngIf=\"typeaheadLoading\">Loading</div>\n        </div>\n\n        <div class=\"product-results\">\n          <table class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th class=\"text-center\">STT</th>\n                <th>Mã sản phẩm</th>\n                <th>Tên sản phẩm</th>\n                <th>Ảnh sản phẩm</th>\n                <th class=\"text-center\">Số lượng</th>\n                <th class=\"text-center\">Giá bán</th>\n                <th class=\"text-center\">Giảm giá</th>\n                <th class=\"text-center\">Thành tiền</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody id=\"pro_search_append\">\n                <tr *ngFor = \"let chitiet of listchitiethoadon; index as i\">\n                  <th class=\"text-center\">{{ i }}</th>\n                  <th>{{chitiet.sanpham.masp}}</th>\n                  <th>{{chitiet.sanpham.tensp}}</th>\n                  <th><img src=\"{{chitiet.sanpham.anhsp}}\" width=\"50px\"></th>\n                  <th class=\"text-center\">\n                    <input\n                    type=\"number\"\n                    name=\"soluongsp\"\n                    [(ngModel)]=\"chitiet.soluong\"\n                    class=\"form-control\"\n                    />\n                  </th>\n                  <th class=\"text-center\">{{chitiet.sanpham.giaban | currency: \"VND\"}}</th>\n                  <th class=\"text-center\">\n                      <input\n                      type=\"number\"\n                      name=\"giamgiasp\"\n                      [(ngModel)]=\"chitiet.giamgia\"\n                      class=\"form-control\"\n                      />\n                  </th>\n                  <th class=\"text-center\">{{chitiet.sanpham.giaban*chitiet.soluong -chitiet.giamgia| currency: \"VND\"}}</th>\n                  <th style=\"text-align: center;\">\n                    <i class=\"fa fa-trash-o\" style=\"color: darkred;\" title=\"Xóa\" (click)=\"deleteChitietBill(i)\"></i>\n                  </th>\n                </tr>\n            </tbody>\n          </table>\n          <div class=\"alert alert-success\" role=\"alert\" style=\"margin-top: 30px;\">Gõ mã hoặc tên sản phẩm vào hộp\n            tìm kiếm để thêm hàng vào đơn hàng\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"morder-info\" style=\"padding: 4px;\">\n              <div class=\"tab-contents\" style=\"padding: 8px 6px;\">\n                <div class=\"form-group marg-bot-10 clearfix\">\n                  <div class=\"col-md-4\" style=\"padding:0px\">\n                    <label>Khách hàng</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <div class=\"col-md-10 padd-0\" style=\"position: relative;padding-left: 0;\">\n                      <ng-template #customItemTemplateKhachHang let-model=\"item\" let-index=\"index\">\n                        <h6>{{model.makhachhang}}</h6>\n                        <p><strong>{{model.ten}}</strong></p>\n                        <p>{{model.sdt}}</p>\n                      </ng-template>\n                        <input [(ngModel)]=\"asyncSelectedKhachHang\"\n                        [typeaheadAsync]=\"true\"\n                        [typeahead]=\"dataSourceKhachHang\"\n                        (typeaheadOnSelect)=\"typeaheadOnSelectKhachHang($event)\"\n                        [typeaheadItemTemplate]=\"customItemTemplateKhachHang\"\n                        [typeaheadOptionsLimit]=\"7\"\n                        [typeaheadScrollable]=\"true\"\n                        typeaheadOptionField=\"makhachhang\"\n                        placeholder=\"Tìm khách hàng\"\n                        class=\"form-control\"\n                        style=\"border-radius: 3px 0 0 3px !important;\">\n                        <div *ngIf=\"typeaheadLoading\">Loading</div>\n                        <span class=\"del-cys\"\n                        style=\"color: red; position: absolute; right: 5px; top:5px; \"></span>\n\n                      <div id=\"cys-suggestion-box\"\n                        style=\"border: 1px solid #444; display: none; overflow-y: auto;background-color: #fff; z-index: 2 !important; position: absolute; left: 0; width: 100%; padding: 5px 0px; max-height: 400px !important;\">\n                        <div class=\"search-cys-inner\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-2 padd-0\">\n                      <button class=\"btn btn-primary\"\n                        style=\"border-radius: 0 3px 3px 0; box-shadow: none; padding: 7px 11px;\" type=\"button\"\n                        (click)=\"openModal(template)\">\n                        +\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group marg-bot-10 clearfix\">\n                  <div class=\"col-md-4\" style=\"padding:0px\">\n                    <label>NV bán hàng</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <input name=\"nvbanhang\" class=\"form-control\" disabled value=\"{{currentUser.ten}}\">\n                  </div>\n                </div>\n                <div class=\"form-group marg-bot-10 clearfix\">\n                  <div class=\"col-md-4\" style=\"padding:0px\">\n                    <label>Ghi chú</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <textarea name=\"ghichu\" class=\"form-control\" [(ngModel)] = \"ghichu\"></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <h4 class=\"lighter\" style=\"margin-top: 0;\">\n              <i class=\"fa fa-info-circle blue\"></i>\n              Thông tin thanh toán\n            </h4>\n\n            <div class=\"morder-info\" style=\"padding: 4px;\">\n              <div class=\"tab-contents\" style=\"padding: 8px 6px;\">\n                <div class=\"form-group marg-bot-10 clearfix\">\n                  <div class=\"col-md-4\">\n                    <label>Hình thức</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <div class=\"input-group\">\n                      <input name=\"method-pay\" class=\"payment-method\" type=\"radio\" checked  [value]=\"1\"\n                      [(ngModel)]=\"methodPay\">\n                      Tiền mặt &nbsp;\n                      <input name=\"method-pay\" class=\"payment-method\" type=\"radio\" [value]=\"2\"\n                      [(ngModel)]=\"methodPay\"> Thẻ&nbsp;\n                      <input name=\"method-pay\" class=\"payment-method\" type=\"radio\" [value]=\"3\"\n                      [(ngModel)]=\"methodPay\"> CK&nbsp;\n                    </div>\n\n                  </div>\n                </div>\n                <div class=\"form-group marg-bot-10 clearfix\">\n                  <div class=\"col-md-4\">\n                    <label>Tiền hàng</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <div class=\"total-money\">\n                      {{getTotalProdCost() | currency: \"VND\"}}\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group marg-bot-10 clearfix\">\n                  <div class=\"col-md-4\">\n                    <label>Giảm giá</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <input class=\"form-control text-right\"\n                    style=\"border-radius: 0 !important;\"\n                    type=\"number\"\n                    placeholder=\"0\"\n                    name=\"giamgiaBill\"\n                    [(ngModel)] = \"giamgiaBill\">\n                  </div>\n                </div>\n                <div class=\"form-group marg-bot-10 clearfix\">\n                  <div class=\"col-md-4\">\n                    <label>Tổng cộng</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <div class=\"total-after-discount\">\n                      {{getTotalCost() | currency: \"VND\"}}\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group marg-bot-10 clearfix\">\n                  <div class=\"col-md-4 padd-right-0\">\n                    <label>Khách đưa</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <input class=\"form-control text-right\"\n                    style=\"border-radius: 0 !important;\"\n                    type=\"number\"\n                    placeholder=\"0\"\n                    name=\"khachduaBill\"\n                    [(ngModel)] = \"khachduaBill\">\n                  </div>\n                </div>\n                <div class=\"form-group marg-bot-10 clearfix\">\n                  <div class=\"col-md-4\">\n                    <label>Còn nợ</label>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <div>{{getDebt() | currency: \"VND\"}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"btn-groups pull-right\" style=\"margin-bottom: 50px;\">\n              <button class=\"btn btn-info margin-right-10\" (click)=\"initBill()\"><i class=\"fa fa-plus\"></i> Khởi tạo\n              </button>\n              <button class=\"btn btn-primary margin-right-10\" (click)=\"checkoutBill()\"><i class=\"fa fa-credit-card\"></i> Thanh toán\n              </button>\n              <a routerLink=\"../orders\">\n                <button class=\"btn-back btn btn-default\" type=\"button\"><i class=\"fa fa-arrow-left\"></i> Thoát\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/categories-prod/categories-prod.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/categories-prod/categories-prod.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Danh sách danh mục sản phẩm\r\n      <span class=\"pull-right\">\r\n        <a class=\"btn btn-block btn-primary\" (click)=\"openModal(templateAddCateProd)\">\r\n          <i class=\"fa fa-edit\"></i> Thêm mới\r\n        </a>\r\n      </span>\r\n    </h1>\r\n  </section>\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <ng-template #templateAddCateProd>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>Tạo mới danh mục sản phẩm</strong>\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRefAddCateProd.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <!--Form Add SP-->\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"tensp\">Tên danh mục sản phẩm</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"tendm\" placeholder=\"Nhập tên danh mục SP (bắt buộc)\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"sdtkh\">Mô tả</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"motadm\" placeholder=\"Nhập mô tả danh mục SP (bắt buộc)\"/>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Lưu</button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <!--End form add KH-->\r\n    </ng-template>\r\n    <div class=\"box\">\r\n      <div class=\"box-header\">\r\n        <div class=\"form-group col-md-7 padd-0\">\r\n          <input class=\"form-control\" id=\"cate-search\" name=\"searchTerm\" [(ngModel)]=\"searchTerm\" type=\"text\" placeholder=\"Nhập tên danh mục sản phẩm\">\r\n        </div>\r\n        <div class=\"form-group col-md-5 \">\r\n          <button class=\"btn btn-primary btn-large btn-ssup\" (click)=\"search()\"><i class=\"fa fa-search\"></i> Tìm kiếm\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"box-body\">\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col-md-4\">Tên danh mục</th>\r\n              <th scope=\"col-md-6\">Mô tả</th>\r\n              <th scope=\"col-md-2\" style=\"text-align: center;\">Công cụ</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n              <ng-template ngFor let-item [ngForOf]=\"listCateProds\" let-i=\"index\">\r\n                <tr>\r\n                  <td scope=\"row col-md-4\">{{item.tendanhmuc}}</td>\r\n                  <th scope=\"row col-md-6\">{{item.motadanhmuc}}</th>\r\n                  <td style=\"text-align: center;\">\r\n                      <i title=\"Sửa\" class=\"fa fa-pencil-square-o\" style=\"margin-right: 5px;\"\r\n                        (click)=\"editCateProduct(item.id)\"></i>\r\n                      <i class=\"fa fa-trash-o\" style=\"color: darkred;\" title=\"Xóa\" (click)=\"deleteCateProduct(item.id)\"></i>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"box-footer\">\r\n        <div class=\"d-flex justify-content-between p-2\"></div>\r\n        <div class=\"alert alert-info summany-info clearfix\" role=\"alert\">\r\n          SL sản phẩm/SL nhà sản xuất: 3/2\r\n          <div class=\"pull-right\">\r\n            <pagination previousText=\"&lsaquo;\" name=\"currentPage\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n              lastText=\"&raquo;\" [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\r\n              [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\r\n              (pageChanged)=\"pageChanged($event)\">\r\n            </pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/manuf-prod/manuf-prod.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/manuf-prod/manuf-prod.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n      <h1>\n        Danh sách nhà sản xuất\n        <span class=\"pull-right\">\n          <a class=\"btn btn-block btn-primary\" >\n            <i class=\"fa fa-edit\"></i> Thêm mới\n          </a>\n        </span>\n      </h1>\n    </section>\n    <!-- Main content -->\n    <section class=\"content\">\n\n    </section>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/products.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/products.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Danh sách sản phẩm\r\n      <span class=\"pull-right\">\r\n        <a class=\"btn btn-block btn-primary\" (click)=\"openModal(templateAddProd)\">\r\n          <i class=\"fa fa-edit\"></i> Thêm mới\r\n        </a>\r\n      </span>\r\n    </h1>\r\n  </section>\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <ng-template #templateAddProd>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <strong>Tạo mới sản phẩm</strong>\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRefAddProd.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <!--Form Add SP-->\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"masp\">Mã sản phẩm</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"masp\" placeholder=\"Mã tự sinh nếu bỏ trống\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"tensp\">Tên sản phẩm</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"tensp\" placeholder=\"Nhập tên SP (bắt buộc)\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"sdtkh\">Số lượng</label>\r\n            <input type=\"number\" class=\"form-control\" name=\"soluong\" />\r\n          </div>\r\n          <div class=\"form-group form-inline\">\r\n            <label for=\"giavon\">Giá vốn</label>\r\n            <input type=\"number\" class=\"form-control\" name=\"giavon\" />\r\n            <label for=\"giaban\">Giá bán</label>\r\n            <input type=\"number\" class=\"form-control\" name=\"giaban\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"danhmuc\">Danh mục</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"danhmuc\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"nhasx\">Nhà sản xuất</label>\r\n            <ng-template ngFor let-item [ngForOf]=\"listProds\" let-i=\"index\">\r\n            <select name=\"nhasx\" class=\"form-control\">\r\n              <option value=\"0\">{{item.nhasanxuat.tennsx}}</option>\r\n              <option value=\"1\">Samsung</option>\r\n            </select>\r\n          </ng-template>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"motasp\">Mô tả sản phẩm</label>\r\n            <textarea type=\"text\" class=\"form-control\" id=\"motasp\">\r\n                    </textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"anhsp\">Ảnh sản phẩm</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"anhsp\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Gắn nhãn</label>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"ishot\" value=\"1\">\r\n              <label class=\"form-check-label\" for=\"ishot\">\r\n                is Hot\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"isnew\" value=\"1\">\r\n              <label class=\"form-check-label\" for=\"isnew\">\r\n                is New\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"displaywebsite\" value=\"1\">\r\n              <label class=\"form-check-label\" for=\"displaywebsite\">\r\n                Hiển thị trên website\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Lưu</button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <!--End form add KH-->\r\n    </ng-template>\r\n    <div class=\"box\">\r\n      <div class=\"box-header\">\r\n        <div class=\"form-group col-md-5 padd-0\">\r\n          <input class=\"form-control\" id=\"product-search\" name=\"searchTerm\" [(ngModel)]=\"searchTerm\" type=\"text\" placeholder=\"Nhập mã sản phẩm hoặc tên sản phẩm\">\r\n        </div>\r\n        <div class=\"form-group col-md-7 \">\r\n          <div class=\"col-md-3 padd-0\" style=\"margin-right: 10px;\">\r\n            <select class=\"form-control\" [(ngModel)]=\"filterStatus\" (change)=\"filter()\"\r\n            name=\"filterStatus\">\r\n              <option value=\"0\">Trạng thái</option>\r\n              <option value=\"1\">Đang kinh doanh</option>\r\n              <option value=\"2\">Đã ngừng kinh doanh</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-3 padd-0\" style=\"margin-right: 10px;\">\r\n          <select class=\"form-control\" [(ngModel)]=\"fitlerdanhmucsp\" name=\"fitlerdanhmucsp\">\r\n              <option selected=\"selected\" value=\"-1\">--Danh mục--</option>\r\n              <option ></option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-3 padd-0\" style=\"margin-right: 10px;\">\r\n            <select class=\"form-control search-option-3\" id=\"prd_manufacture_id\">\r\n              <option selected=\"selected\" value=\"-1\">--Nhà sản xuất--</option>\r\n              <optgroup label=\"Chọn nhà sản xuất\">\r\n                <option value=\"8\">test</option>\r\n                <option value=\"9\">apple</option>\r\n                <option value=\"10\">cenlia</option>\r\n                <option value=\"11\">Tommy</option>\r\n              </optgroup>\r\n              <optgroup label=\"------------------------\">\r\n                <option value=\"product_manufacture\" data-toggle=\"modal\" data-target=\"#list-prd-manufacture\">Tạo mới\r\n                  Nhà sản xuất\r\n                </option>\r\n              </optgroup>\r\n            </select>\r\n          </div>\r\n          <button class=\"btn btn-primary btn-large btn-ssup\" (click)=\"search()\"><i class=\"fa fa-search\"></i> Tìm kiếm\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"box-body\">\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Tên sản phẩm</th>\r\n              <th scope=\"col\">Mã sản phẩm</th>\r\n              <th scope=\"col\">SL</th>\r\n              <th scope=\"col\">Giá bán</th>\r\n              <th scope=\"col\">Danh mục</th>\r\n              <th scope=\"col\">Nhà sản xuất</th>\r\n              <th scope=\"col\">Công cụ</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n              <ng-template ngFor let-item [ngForOf]=\"listProds\" let-i=\"index\">\r\n                <tr>\r\n                  <td scope=\"row\">{{item.tensp}}</td>\r\n                  <th scope=\"row\" (click) = \"toggleChiTietSanPham(i)\"\r\n                  >{{item.masp}}</th>\r\n                  <td scope=\"row\">{{item.soluong}}</td>\r\n                  <td scope=\"row\">{{item.giaban | currency: \"VND\"}}</td>\r\n                  <td scope=\"row\"><span *ngFor=\"let danhmuc of item.chitietdanhmuc; let i=index\">{{danhmuc.danhmucsp.tendanhmuc}}<span *ngIf=\"i!=item.chitietdanhmuc.length-1\">, </span>  </span></td>\r\n                  <td scope=\"row\">{{item.nhasanxuat.tennsx}}</td>\r\n                  <td style=\"text-align: center;\">\r\n                      <i title=\"Sửa\" class=\"fa fa-pencil-square-o\" style=\"margin-right: 5px;\"\r\n                        (click)=\"editProduct(item.id)\"></i>\r\n                      <i class=\"fa fa-trash-o\" style=\"color: darkred;\" title=\"Xóa\" (click)=\"deleteProduct(item.id)\"></i>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"box-footer\">\r\n        <div class=\"d-flex justify-content-between p-2\"></div>\r\n        <div class=\"alert alert-info summany-info clearfix\" role=\"alert\">\r\n          <div class=\"sm-info pull-left\">\r\n            SL sản phẩm/SL nhà sản xuất: 3/2\r\n          </div>\r\n          <div class=\"pull-right\">\r\n            <pagination previousText=\"&lsaquo;\" name=\"currentPage\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n              lastText=\"&raquo;\" [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\r\n              [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\r\n              (pageChanged)=\"pageChanged($event)\">\r\n            </pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </section>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/suppliers-prod/suppliers-prod.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/suppliers-prod/suppliers-prod.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n      <h1>\n        Danh sách nhà cung cấp\n        <span class=\"pull-right\">\n          <a class=\"btn btn-block btn-primary\" >\n            <i class=\"fa fa-edit\"></i> Thêm mới\n          </a>\n        </span>\n      </h1>\n    </section>\n    <!-- Main content -->\n    <section class=\"content\">\n\n    </section>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profiles/profiles.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profiles/profiles.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Thông tin nhân viên\n    </h1>\n  </section>\n  <!-- Main content -->\n  <section class=\"content\">\n    <div class=\"box\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9 align-center\">\n                <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateUser()\">\n                    <div class=\"form-group\">\n                      <label for=\"manv\">Mã Nhân viên</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        formControlName=\"manhanvien\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" />\n                      </div>\n                    <div class=\"form-group\">\n                      <label for=\"tennv\">Tên</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        formControlName=\"ten\"\n\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"sdt\">Số điện thoại</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"sdt\" />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"email\">Email</label>\n                      <input type=\"email\" class=\"form-control\" formControlName=\"email\" />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"diachi\">Địa chỉ</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"diachi\"/>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ngaysinh\">Ngày sinh</label>\n                      <input bsDatepicker\n                      class=\"form-control\"\n                      placement=\"top\" formControlName=\"ngaysinh\" />\n                    </div>\n                    <div class=\"form-group\">\n                      <label>Giới tính</label>\n                      <div class=\"form-check\">\n                        <input\n                          class=\"form-check-input\"\n                          type=\"radio\"\n                          formControlName=\"gioitinh\"\n                          [value]=\"1\"\n\n                        />\n                        <label class=\"form-check-label\">\n                          Nam\n                        </label>\n                      </div>\n                      <div class=\"form-check\">\n                        <input\n                          class=\"form-check-input\"\n                          type=\"radio\"\n                          formControlName=\"gioitinh\"\n                          [value]=\"0\"\n\n                        />\n                        <label class=\"form-check-label\">\n                          Nữ\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <button type=\"submit\" class=\"btn btn-primary\">Cập nhật</button>\n                    </div>\n                </form>\n            </div>\n          </div>\n        </div>\n    </div>\n  </section>\n\n</div>\n");

/***/ }),

/***/ "./src/app/_models/chitiethoadonbh.ts":
/*!********************************************!*\
  !*** ./src/app/_models/chitiethoadonbh.ts ***!
  \********************************************/
/*! exports provided: ChiTietHoaDonBH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietHoaDonBH", function() { return ChiTietHoaDonBH; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ChiTietHoaDonBH {
}


/***/ }),

/***/ "./src/app/_models/hoadonbanhang.ts":
/*!******************************************!*\
  !*** ./src/app/_models/hoadonbanhang.ts ***!
  \******************************************/
/*! exports provided: HoaDonBanHang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoaDonBanHang", function() { return HoaDonBanHang; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class HoaDonBanHang {
}


/***/ }),

/***/ "./src/app/_models/khachhang.ts":
/*!**************************************!*\
  !*** ./src/app/_models/khachhang.ts ***!
  \**************************************/
/*! exports provided: KhachHang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhachHang", function() { return KhachHang; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KhachHang {
}


/***/ }),

/***/ "./src/app/_models/pagination.ts":
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PaginatedResult {
}


/***/ }),

/***/ "./src/app/_resolver/bill-bh-resolver.ts":
/*!***********************************************!*\
  !*** ./src/app/_resolver/bill-bh-resolver.ts ***!
  \***********************************************/
/*! exports provided: BillBHResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillBHResolver", function() { return BillBHResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_bills_bh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/bills-bh.service */ "./src/app/_services/bills-bh.service.ts");






let BillBHResolver = class BillBHResolver {
    constructor(billbhService, router) {
        this.billbhService = billbhService;
        this.router = router;
        this.pageNumber = 1;
        this.pageSize = 4;
    }
    resolve(route) {
        return this.billbhService.getListBill(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.log(error);
            this.router.navigate(['/admin']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
};
BillBHResolver.ctorParameters = () => [
    { type: _services_bills_bh_service__WEBPACK_IMPORTED_MODULE_5__["BillsBhService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BillBHResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BillBHResolver);



/***/ }),

/***/ "./src/app/_resolver/cate-resolver.ts":
/*!********************************************!*\
  !*** ./src/app/_resolver/cate-resolver.ts ***!
  \********************************************/
/*! exports provided: CateProductResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateProductResolver", function() { return CateProductResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_cate_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/cate-product.service */ "./src/app/_services/cate-product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CateProductResolver = class CateProductResolver {
    constructor(cateProdrService, router) {
        this.cateProdrService = cateProdrService;
        this.router = router;
        this.pageNumber = 1;
        this.pageSize = 4;
    }
    resolve(route) {
        return this.cateProdrService.getCateProductPage(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            console.log(error);
            this.router.navigate(['/admin/categories-prod']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
};
CateProductResolver.ctorParameters = () => [
    { type: _services_cate_product_service__WEBPACK_IMPORTED_MODULE_4__["CateProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CateProductResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CateProductResolver);



/***/ }),

/***/ "./src/app/_resolver/customer-all-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolver/customer-all-resolver.ts ***!
  \****************************************************/
/*! exports provided: AllCustomersResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCustomersResolver", function() { return AllCustomersResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/customers.service */ "./src/app/_services/customers.service.ts");




let AllCustomersResolver = class AllCustomersResolver {
    constructor(custService, router) {
        this.custService = custService;
        this.router = router;
    }
    resolve(route) {
        return this.custService.getAllKHNonPag();
    }
};
AllCustomersResolver.ctorParameters = () => [
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AllCustomersResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AllCustomersResolver);



/***/ }),

/***/ "./src/app/_resolver/customer-detail-resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/_resolver/customer-detail-resolver.ts ***!
  \*******************************************************/
/*! exports provided: CustomersDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersDetailResolver", function() { return CustomersDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/customers.service */ "./src/app/_services/customers.service.ts");




let CustomersDetailResolver = class CustomersDetailResolver {
    constructor(custService, router, activeroute) {
        this.custService = custService;
        this.router = router;
        this.activeroute = activeroute;
    }
    resolve(route) {
        return this.custService.getCustomer(route.paramMap.get('id')); // lấy router trong resolver
    }
};
CustomersDetailResolver.ctorParameters = () => [
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CustomersDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomersDetailResolver);



/***/ }),

/***/ "./src/app/_resolver/customer-resolver.ts":
/*!************************************************!*\
  !*** ./src/app/_resolver/customer-resolver.ts ***!
  \************************************************/
/*! exports provided: CustomersResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersResolver", function() { return CustomersResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/customers.service */ "./src/app/_services/customers.service.ts");






let CustomersResolver = class CustomersResolver {
    constructor(custService, router) {
        this.custService = custService;
        this.router = router;
        this.pageNumber = 1;
        this.pageSize = 4;
    }
    resolve(route) {
        return this.custService.getAllKhachHang(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.log(error);
            this.router.navigate(['/admin/customers']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
};
CustomersResolver.ctorParameters = () => [
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_5__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CustomersResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomersResolver);



/***/ }),

/***/ "./src/app/_resolver/edit-bill-resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/_resolver/edit-bill-resolver.ts ***!
  \*************************************************/
/*! exports provided: EditBillResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBillResolver", function() { return EditBillResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_bills_bh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/bills-bh.service */ "./src/app/_services/bills-bh.service.ts");






let EditBillResolver = class EditBillResolver {
    constructor(billbhService, router) {
        this.billbhService = billbhService;
        this.router = router;
    }
    resolve(route) {
        return this.billbhService.getBillById(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.log(error);
            this.router.navigate(['/admin/orders']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
};
EditBillResolver.ctorParameters = () => [
    { type: _services_bills_bh_service__WEBPACK_IMPORTED_MODULE_5__["BillsBhService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EditBillResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EditBillResolver);



/***/ }),

/***/ "./src/app/_resolver/product-resolver.ts":
/*!***********************************************!*\
  !*** ./src/app/_resolver/product-resolver.ts ***!
  \***********************************************/
/*! exports provided: ProductsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsResolver", function() { return ProductsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ProductsResolver = class ProductsResolver {
    constructor(prodrService, router) {
        this.prodrService = prodrService;
        this.router = router;
    }
    resolve(route) {
        return this.prodrService.getListProduct().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            console.log(error);
            this.router.navigate(['/admin/orders']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
};
ProductsResolver.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsResolver);



/***/ }),

/***/ "./src/app/_resolver/products-resolver.ts":
/*!************************************************!*\
  !*** ./src/app/_resolver/products-resolver.ts ***!
  \************************************************/
/*! exports provided: ProductResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolver", function() { return ProductResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ProductResolver = class ProductResolver {
    constructor(prodrService, router) {
        this.prodrService = prodrService;
        this.router = router;
        this.pageNumber = 1;
        this.pageSize = 4;
    }
    resolve(route) {
        return this.prodrService.getProductPage(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            console.log(error);
            this.router.navigate(['/admin/products']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
};
ProductResolver.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductResolver);



/***/ }),

/***/ "./src/app/_services/bill-detail-bh.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/bill-detail-bh.service.ts ***!
  \*****************************************************/
/*! exports provided: BillDetailBhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailBhService", function() { return BillDetailBhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let BillDetailBhService = class BillDetailBhService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    postDetailsBill(bill) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'detailsBH', bill, { observe: 'response', headers: headers });
    }
};
BillDetailBhService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BillDetailBhService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BillDetailBhService);



/***/ }),

/***/ "./src/app/_services/bills-bh.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/bills-bh.service.ts ***!
  \***********************************************/
/*! exports provided: BillsBhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsBhService", function() { return BillsBhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let BillsBhService = class BillsBhService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getListBill(page, pageSize) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && pageSize != null) {
            params = params.append('pageNumber', (page - 1).toString());
            params = params.append('pageSize', pageSize.toString());
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'billBHs', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response.body != null) {
                paginatedResult.result = response.body.content;
                paginatedResult.totalElements = response.body.totalElements;
                paginatedResult.pagination = {
                    currentPage: response.body.pageable.pageNumber + 1,
                    totalItems: response.body.totalElements,
                    totalPages: response.body.totalPages,
                    itemsPerPage: response.body.pageable.pageSize
                };
                return paginatedResult;
            }
        }));
    }
    getSearchListBill(page, pageSize, searchTerm, fromdate, todate) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && pageSize != null) {
            params = params.append('pageNumber', (page - 1).toString());
            params = params.append('pageSize', pageSize.toString());
        }
        if (searchTerm != null && fromdate != null && todate != null) {
            params = params.append('searchTerm', searchTerm);
            params = params.append('fromdate', fromdate);
            params = params.append('todate', todate);
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'billBHs/search', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response.body != null) {
                paginatedResult.result = response.body.content;
                paginatedResult.pagination = {
                    currentPage: response.body.pageable.pageNumber + 1,
                    totalItems: response.body.totalElements,
                    totalPages: response.body.totalPages,
                    itemsPerPage: response.body.pageable.pageSize
                };
            }
            return paginatedResult;
        }));
    }
    getBillById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'billBHs/' + id);
    }
    deleteBill(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'billBHs/' + id);
    }
    postBill(bill) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'billBHs', bill, { headers: headers });
    }
    putBill(bill) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'billBHs', bill, { headers: headers });
    }
    cancleBill(bill) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'billBHs/cancle', bill, { headers: headers });
    }
};
BillsBhService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BillsBhService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BillsBhService);



/***/ }),

/***/ "./src/app/_services/cate-product.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/cate-product.service.ts ***!
  \***************************************************/
/*! exports provided: CateProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateProductService", function() { return CateProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CateProductService = class CateProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCateProductPage(page, pageSize) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && pageSize != null) {
            params = params.append('pageNumber', (page - 1).toString());
            params = params.append('pageSize', pageSize.toString());
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'cates', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            paginatedResult.result = response.body.content;
            paginatedResult.pagination = {
                currentPage: response.body.pageable.pageNumber + 1,
                totalItems: response.body.totalElements,
                totalPages: response.body.totalPages,
                itemsPerPage: response.body.pageable.pageSize
            };
            return paginatedResult;
        }));
    }
    deleteCateProduct(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'cates/' + id);
    }
    getSearchListCateProduct(page, pageSize, searchTerm) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && pageSize != null) {
            params = params.append('pageNumber', (page - 1).toString());
            params = params.append('pageSize', pageSize.toString());
        }
        if (searchTerm != null) {
            params = params.append('searchTerm', searchTerm);
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'cate/search', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response.body != null) {
                paginatedResult.result = response.body.content;
                paginatedResult.pagination = {
                    currentPage: response.body.pageable.pageNumber + 1,
                    totalItems: response.body.totalElements,
                    totalPages: response.body.totalPages,
                    itemsPerPage: response.body.pageable.pageSize
                };
            }
            return paginatedResult;
        }));
    }
};
CateProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CateProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CateProductService);



/***/ }),

/***/ "./src/app/_services/customers.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/customers.service.ts ***!
  \************************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CustomersService = class CustomersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllKHNonPag() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'allcustomers');
    }
    getAllKhachHang(page, pageSize) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && pageSize != null) {
            params = params.append('pageNumber', (page - 1).toString());
            params = params.append('pageSize', pageSize.toString());
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'customers', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response.body != null) {
                paginatedResult.result = response.body.content;
                paginatedResult.totalElements = response.body.totalElements;
                paginatedResult.pagination = {
                    currentPage: response.body.pageable.pageNumber + 1,
                    totalItems: response.body.totalElements,
                    totalPages: response.body.totalPages,
                    itemsPerPage: response.body.pageable.pageSize
                };
                return paginatedResult;
            }
        }));
    }
    getSearchKhachHang(page, pageSize, searchTerm) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && pageSize != null) {
            params = params.append('pageNumber', (page - 1).toString());
            params = params.append('pageSize', pageSize.toString());
        }
        if (searchTerm != null || typeof (searchTerm) != 'undefined') {
            params = params.append('searchTerm', searchTerm);
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'customers/search', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response.body != null) {
                paginatedResult.result = response.body.content;
                paginatedResult.pagination = {
                    currentPage: response.body.pageable.pageNumber + 1,
                    totalItems: response.body.totalElements,
                    totalPages: response.body.totalPages,
                    itemsPerPage: response.body.pageable.pageSize
                };
            }
            return paginatedResult;
        }));
    }
    deleteCustomer(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'customers/' + id);
    }
    addCustomer(customers) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'customers', customers, { headers: headers });
    }
    getCustomer(makhachhang) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'customers/' + makhachhang, { headers: headers });
    }
    getDebtCustomer(makhachhang) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'customers/totaldebt/' + makhachhang, { headers: headers });
    }
};
CustomersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomersService);



/***/ }),

/***/ "./src/app/_services/debt-customer-bill.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/_services/debt-customer-bill.service.ts ***!
  \*********************************************************/
/*! exports provided: DebtCustomerBillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtCustomerBillService", function() { return DebtCustomerBillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let DebtCustomerBillService = class DebtCustomerBillService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getListCustomerBillDebt(makhachhang, page, pageSize) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && pageSize != null) {
            params = params.append('pageNumber', (page - 1).toString());
            params = params.append('pageSize', pageSize.toString());
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'customers/bill/debt/' + makhachhang, { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response.body != null) {
                paginatedResult.pagination = {
                    currentPage: response.body.pageable.pageNumber + 1,
                    totalItems: response.body.totalElements,
                    totalPages: response.body.totalPages,
                    itemsPerPage: response.body.pageable.pageSize
                };
                paginatedResult.result = response.body.content;
            }
            return paginatedResult;
        }));
    }
};
DebtCustomerBillService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DebtCustomerBillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DebtCustomerBillService);



/***/ }),

/***/ "./src/app/_services/product.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ProductService = class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getListProduct() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'allproducts');
    }
    getProductPage(page, pageSize) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && pageSize != null) {
            params = params.append('pageNumber', (page - 1).toString());
            params = params.append('pageSize', pageSize.toString());
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'product', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            paginatedResult.result = response.body.content;
            paginatedResult.totalElements = response.body.totalElements;
            paginatedResult.pagination = {
                currentPage: response.body.pageable.pageNumber + 1,
                totalItems: response.body.totalElements,
                totalPages: response.body.totalPages,
                itemsPerPage: response.body.pageable.pageSize
            };
            return paginatedResult;
        }));
    }
    deleteProduct(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'product/' + id);
    }
    getSearchListProduct(page, pageSize, searchTerm) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && pageSize != null) {
            params = params.append('pageNumber', (page - 1).toString());
            params = params.append('pageSize', pageSize.toString());
        }
        if (searchTerm != null) {
            params = params.append('searchTerm', searchTerm);
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'product/search', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response.body != null) {
                paginatedResult.result = response.body.content;
                paginatedResult.pagination = {
                    currentPage: response.body.pageable.pageNumber + 1,
                    totalItems: response.body.totalElements,
                    totalPages: response.body.totalPages,
                    itemsPerPage: response.body.pageable.pageSize
                };
            }
            return paginatedResult;
        }));
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/_services/purchase-history.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/purchase-history.service.ts ***!
  \*******************************************************/
/*! exports provided: PurchaseHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseHistoryService", function() { return PurchaseHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let PurchaseHistoryService = class PurchaseHistoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getListCustomerBill(makhachhang, page, pageSize) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && pageSize != null) {
            params = params.append('pageNumber', (page - 1).toString());
            params = params.append('pageSize', pageSize.toString());
        }
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'customers/bill/' + makhachhang, { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response.body != null) {
                paginatedResult.pagination = {
                    currentPage: response.body.pageable.pageNumber + 1,
                    totalItems: response.body.totalElements,
                    totalPages: response.body.totalPages,
                    itemsPerPage: response.body.pageable.pageSize
                };
                paginatedResult.result = response.body.content;
            }
            return paginatedResult;
        }));
    }
};
PurchaseHistoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PurchaseHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PurchaseHistoryService);



/***/ }),

/***/ "./src/app/_services/users.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/users.service.ts ***!
  \********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let UsersService = class UsersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getUserByMaNV(manv) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'users/' + manv);
    }
    updateUser(user) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'users', user, { headers: headers });
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _customers_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customer-detail/customer-detail.component */ "./src/app/admin/customers/customer-detail/customer-detail.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/admin/orders/orders.component.ts");
/* harmony import */ var _orders_sell_prod_sell_prod_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders/sell-prod/sell-prod.component */ "./src/app/admin/orders/sell-prod/sell-prod.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ "./src/app/admin/products/products.component.ts");
/* harmony import */ var _products_categories_prod_categories_prod_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/categories-prod/categories-prod.component */ "./src/app/admin/products/categories-prod/categories-prod.component.ts");
/* harmony import */ var _products_manuf_prod_manuf_prod_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/manuf-prod/manuf-prod.component */ "./src/app/admin/products/manuf-prod/manuf-prod.component.ts");
/* harmony import */ var _products_suppliers_prod_suppliers_prod_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/suppliers-prod/suppliers-prod.component */ "./src/app/admin/products/suppliers-prod/suppliers-prod.component.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/admin/profiles/profiles.component.ts");
/* harmony import */ var _orders_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders/edit-order/edit-order.component */ "./src/app/admin/orders/edit-order/edit-order.component.ts");
/* harmony import */ var _resolver_product_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_resolver/product-resolver */ "./src/app/_resolver/product-resolver.ts");
/* harmony import */ var _resolver_customer_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_resolver/customer-resolver */ "./src/app/_resolver/customer-resolver.ts");
/* harmony import */ var _resolver_bill_bh_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_resolver/bill-bh-resolver */ "./src/app/_resolver/bill-bh-resolver.ts");
/* harmony import */ var _resolver_edit_bill_resolver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../_resolver/edit-bill-resolver */ "./src/app/_resolver/edit-bill-resolver.ts");
/* harmony import */ var _resolver_products_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../_resolver/products-resolver */ "./src/app/_resolver/products-resolver.ts");
/* harmony import */ var _resolver_cate_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../_resolver/cate-resolver */ "./src/app/_resolver/cate-resolver.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/admin/customers/customers.component.ts");
/* harmony import */ var _resolver_customer_all_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../_resolver/customer-all-resolver */ "./src/app/_resolver/customer-all-resolver.ts");
/* harmony import */ var _resolver_customer_detail_resolver__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../_resolver/customer-detail-resolver */ "./src/app/_resolver/customer-detail-resolver.ts");
























const routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        children: [
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
            },
            {
                path: 'customers',
                component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_21__["CustomersComponent"],
                resolve: { customers: _resolver_customer_resolver__WEBPACK_IMPORTED_MODULE_16__["CustomersResolver"] }
            },
            {
                path: 'customers/:id',
                component: _customers_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_6__["CustomerDetailComponent"],
                resolve: { khachhang: _resolver_customer_detail_resolver__WEBPACK_IMPORTED_MODULE_23__["CustomersDetailResolver"] }
            },
            {
                path: 'orders',
                component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"],
                resolve: { bills: _resolver_bill_bh_resolver__WEBPACK_IMPORTED_MODULE_17__["BillBHResolver"] }
            },
            {
                path: 'orders/:id',
                component: _orders_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_14__["EditOrderComponent"],
                resolve: { bill: _resolver_edit_bill_resolver__WEBPACK_IMPORTED_MODULE_18__["EditBillResolver"], prods: _resolver_product_resolver__WEBPACK_IMPORTED_MODULE_15__["ProductsResolver"], custs: _resolver_customer_all_resolver__WEBPACK_IMPORTED_MODULE_22__["AllCustomersResolver"] }
            },
            {
                path: 'sell-prod',
                component: _orders_sell_prod_sell_prod_component__WEBPACK_IMPORTED_MODULE_8__["SellProdComponent"],
                resolve: { prods: _resolver_product_resolver__WEBPACK_IMPORTED_MODULE_15__["ProductsResolver"], custs: _resolver_customer_all_resolver__WEBPACK_IMPORTED_MODULE_22__["AllCustomersResolver"] }
            },
            {
                path: 'products',
                component: _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
                resolve: { product: _resolver_products_resolver__WEBPACK_IMPORTED_MODULE_19__["ProductResolver"] }
            },
            {
                path: 'categories-prod',
                component: _products_categories_prod_categories_prod_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesProdComponent"],
                resolve: { cateProduct: _resolver_cate_resolver__WEBPACK_IMPORTED_MODULE_20__["CateProductResolver"] }
            },
            {
                path: 'manuf-prod',
                component: _products_manuf_prod_manuf_prod_component__WEBPACK_IMPORTED_MODULE_11__["ManufProdComponent"]
            },
            {
                path: 'suppliers-prod',
                component: _products_suppliers_prod_suppliers_prod_component__WEBPACK_IMPORTED_MODULE_12__["SuppliersProdComponent"]
            },
            {
                path: 'profile',
                component: _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_13__["ProfilesComponent"]
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRDpcXEpBVkFfV29ya3NwYWNlXFxGRS9zcmNcXGFwcFxcYWRtaW5cXGFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iLCIud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm2015/ngx-bootstrap-locale.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");





let AdminComponent = class AdminComponent {
    constructor(localeService) {
        this.localeService = localeService;
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
        this.locale = 'vi';
    }
    ngOnInit() {
        Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["defineLocale"])('vi', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_3__["viLocale"]);
        this.localeService.use(this.locale);
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    }
    ngOnDestroy() {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    }
};
AdminComponent.ctorParameters = () => [
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/admin/layout/header/header.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _layout_control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/control-sidebar/control-sidebar.component */ "./src/app/admin/layout/control-sidebar/control-sidebar.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/admin/layout/footer/footer.component.ts");
/* harmony import */ var _layout_content_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/content/content.component */ "./src/app/admin/layout/content/content.component.ts");
/* harmony import */ var _layout_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/left-side/left-side.component */ "./src/app/admin/layout/left-side/left-side.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/admin/customers/customers.component.ts");
/* harmony import */ var _customers_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customers/customer-detail/customer-detail.component */ "./src/app/admin/customers/customer-detail/customer-detail.component.ts");
/* harmony import */ var _customers_customer_detail_purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customers/customer-detail/purchase-history/purchase-history.component */ "./src/app/admin/customers/customer-detail/purchase-history/purchase-history.component.ts");
/* harmony import */ var _customers_customer_detail_debt_debt_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customers/customer-detail/debt/debt.component */ "./src/app/admin/customers/customer-detail/debt/debt.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/admin/orders/orders.component.ts");
/* harmony import */ var _orders_sell_prod_sell_prod_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./orders/sell-prod/sell-prod.component */ "./src/app/admin/orders/sell-prod/sell-prod.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products/products.component */ "./src/app/admin/products/products.component.ts");
/* harmony import */ var _products_categories_prod_categories_prod_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./products/categories-prod/categories-prod.component */ "./src/app/admin/products/categories-prod/categories-prod.component.ts");
/* harmony import */ var _products_manuf_prod_manuf_prod_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./products/manuf-prod/manuf-prod.component */ "./src/app/admin/products/manuf-prod/manuf-prod.component.ts");
/* harmony import */ var _products_suppliers_prod_suppliers_prod_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./products/suppliers-prod/suppliers-prod.component */ "./src/app/admin/products/suppliers-prod/suppliers-prod.component.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/admin/profiles/profiles.component.ts");
/* harmony import */ var _orders_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./orders/edit-order/edit-order.component */ "./src/app/admin/orders/edit-order/edit-order.component.ts");
/* harmony import */ var _orders_sell_prod_choose_prod_choose_prod_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./orders/sell-prod/choose-prod/choose-prod.component */ "./src/app/admin/orders/sell-prod/choose-prod/choose-prod.component.ts");




























let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_9__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_6__["TypeaheadModule"].forRoot()
        ],
        declarations: [
            _admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _layout_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_13__["LeftSideComponent"],
            _layout_content_content_component__WEBPACK_IMPORTED_MODULE_12__["ContentComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _layout_control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["ControlSidebarComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
            _customers_customers_component__WEBPACK_IMPORTED_MODULE_15__["CustomersComponent"],
            _customers_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_16__["CustomerDetailComponent"],
            _customers_customer_detail_purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_17__["PurchaseHistoryComponent"],
            _customers_customer_detail_debt_debt_component__WEBPACK_IMPORTED_MODULE_18__["DebtComponent"],
            _orders_orders_component__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"],
            _orders_sell_prod_sell_prod_component__WEBPACK_IMPORTED_MODULE_20__["SellProdComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_21__["ProductsComponent"],
            _products_categories_prod_categories_prod_component__WEBPACK_IMPORTED_MODULE_22__["CategoriesProdComponent"],
            _products_manuf_prod_manuf_prod_component__WEBPACK_IMPORTED_MODULE_23__["ManufProdComponent"],
            _products_suppliers_prod_suppliers_prod_component__WEBPACK_IMPORTED_MODULE_24__["SuppliersProdComponent"],
            _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_25__["ProfilesComponent"],
            _orders_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_26__["EditOrderComponent"],
            _orders_sell_prod_choose_prod_choose_prod_component__WEBPACK_IMPORTED_MODULE_27__["ChooseProdComponent"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/customers/customer-detail/customer-detail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/customers/customer-detail/customer-detail.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2N1c3RvbWVycy9jdXN0b21lci1kZXRhaWwvY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/customers/customer-detail/customer-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/customers/customer-detail/customer-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailComponent", function() { return CustomerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");




let CustomerDetailComponent = class CustomerDetailComponent {
    constructor(route, modalService) {
        this.route = route;
        this.modalService = modalService;
        this.itemsPerPage = 4;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    ngOnInit() {
        this.isPurchaseHistory = true;
        this.route.data.subscribe(data => {
            this.usersdetail = data.khachhang;
        });
        this.route.params.subscribe(params => {
            this.id = params.id;
        });
    }
    emitChangeDebt(event) {
        this.isPurchaseHistory = event;
    }
    updateListProduct(data) {
        this.listCusBill = data;
        this.baseDataListProds = [];
        if (data != null) {
            this.listCusBill.forEach(x => {
                this.baseDataListProds.push(x);
            });
        }
        console.log(this.listCusBill);
    }
};
CustomerDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }
];
CustomerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-detail/customer-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-detail.component.scss */ "./src/app/admin/customers/customer-detail/customer-detail.component.scss")).default]
    })
], CustomerDetailComponent);



/***/ }),

/***/ "./src/app/admin/customers/customer-detail/debt/debt.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/customers/customer-detail/debt/debt.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2N1c3RvbWVycy9jdXN0b21lci1kZXRhaWwvZGVidC9kZWJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/customers/customer-detail/debt/debt.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/customers/customer-detail/debt/debt.component.ts ***!
  \************************************************************************/
/*! exports provided: DebtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtComponent", function() { return DebtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_debt_customer_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/debt-customer-bill.service */ "./src/app/_services/debt-customer-bill.service.ts");




let DebtComponent = class DebtComponent {
    constructor(router, route, debtCusBillService) {
        this.router = router;
        this.route = route;
        this.debtCusBillService = debtCusBillService;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsPerPage = 4;
        this.listMethodBill = [
            'Tiền mặt',
            'Thẻ',
            'Chuyển khoản'
        ];
    }
    ngOnInit() {
        this.listCusBillDebt = new Array();
        this.baseDataListBills = [];
        this.route.params.subscribe(params => {
            this.id = params.id;
        });
        this.pagination = {
            currentPage: 1,
            totalItems: 0,
            totalPages: 0,
            itemsPerPage: this.itemsPerPage
        };
        this.getCustomerBillsDebt(this.id);
    }
    toggleToPurchaseHistory(value) {
        this.change.emit(value);
    }
    debt(mahoadon) {
    }
    getCustomerBillsDebt(makhachhang) {
        this.debtCusBillService.getListCustomerBillDebt(makhachhang, this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListDebt(data.result);
        }, error => console.log(error));
    }
    updateListDebt(data) {
        this.listCusBillDebt = data;
        this.baseDataListBills = [];
        if (data != null) {
            this.listCusBillDebt.forEach(x => {
                this.baseDataListBills.push(x);
            });
        }
        console.log(data);
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.getCustomerBillsDebt(this.id);
    }
    getTotalCusBill() {
        if (this.listCusBillDebt != null) {
            return this.listCusBillDebt.length;
        }
    }
    getTotalMoney() {
        let total = 0;
        if (this.listCusBillDebt != null) {
            for (const customerBillsDebt of this.listCusBillDebt) {
                total += customerBillsDebt.tonggia;
            }
        }
        return total;
    }
    getTotalDebt() {
        let total = 0;
        if (this.listCusBillDebt != null) {
            for (const customerBillsDebt of this.listCusBillDebt) {
                total += this.getDebt(customerBillsDebt);
            }
        }
        return total;
    }
    getDebt(hoadonbanhang) {
        let tongphieuthu = 0;
        if (hoadonbanhang.phieuthus != null) {
            hoadonbanhang.phieuthus.forEach(element => {
                tongphieuthu += element.sotienthu;
            });
        }
        return hoadonbanhang.tonggia - hoadonbanhang.khachhangtra - tongphieuthu;
    }
};
DebtComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_debt_customer_bill_service__WEBPACK_IMPORTED_MODULE_3__["DebtCustomerBillService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DebtComponent.prototype, "listOrder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('chageToPurchaseHistory')
], DebtComponent.prototype, "change", void 0);
DebtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-debt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./debt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-detail/debt/debt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./debt.component.scss */ "./src/app/admin/customers/customer-detail/debt/debt.component.scss")).default]
    })
], DebtComponent);



/***/ }),

/***/ "./src/app/admin/customers/customer-detail/purchase-history/purchase-history.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/customers/customer-detail/purchase-history/purchase-history.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2N1c3RvbWVycy9jdXN0b21lci1kZXRhaWwvcHVyY2hhc2UtaGlzdG9yeS9wdXJjaGFzZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/customers/customer-detail/purchase-history/purchase-history.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/customers/customer-detail/purchase-history/purchase-history.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PurchaseHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseHistoryComponent", function() { return PurchaseHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_purchase_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/purchase-history.service */ "./src/app/_services/purchase-history.service.ts");




let PurchaseHistoryComponent = class PurchaseHistoryComponent {
    constructor(route, router, purchaseHistoryService) {
        this.route = route;
        this.router = router;
        this.purchaseHistoryService = purchaseHistoryService;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsPerPage = 4;
        this.listMethodBill = [
            'Tiền mặt',
            'Thẻ',
            'Chuyển khoản'
        ];
    }
    ngOnInit() {
        this.listCusBill = new Array();
        this.baseDataListBills = [];
        this.route.params.subscribe(params => {
            this.id = params.id;
        });
        this.pagination = {
            currentPage: 1,
            totalItems: 0,
            totalPages: 0,
            itemsPerPage: this.itemsPerPage
        };
        this.getCustomerBills(this.id);
    }
    toggleToDebt(value) {
        this.change.emit(value);
    }
    getCustomerBills(makhachhang) {
        this.purchaseHistoryService.getListCustomerBill(makhachhang, this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListPurchase(data.result);
        }, error => console.log(error));
    }
    updateListPurchase(data) {
        this.listCusBill = data;
        this.baseDataListBills = [];
        if (data != null) {
            this.listCusBill.forEach(x => {
                this.baseDataListBills.push(x);
            });
        }
        console.log(data);
    }
    editCustomer(mahoadon) {
        this.router.navigate(['/admin/orders/' + mahoadon]);
    }
    getTotalCusBill() {
        if (this.listCusBill != null) {
            return this.listCusBill.length;
        }
    }
    getTotalMoney() {
        let total = 0;
        if (this.listCusBill != null) {
            for (const customerBills of this.listCusBill) {
                total += customerBills.tonggia;
            }
        }
        return total;
    }
    getTotalDebt() {
        let total = 0;
        if (this.listCusBill != null) {
            for (const customerBillsDebt of this.listCusBill) {
                total += this.getDebt(customerBillsDebt);
            }
        }
        return total;
    }
    getDebt(hoadonbanhang) {
        let tongphieuthu = 0;
        if (hoadonbanhang.phieuthus != null) {
            hoadonbanhang.phieuthus.forEach(element => {
                tongphieuthu += element.sotienthu;
            });
        }
        return hoadonbanhang.tonggia - hoadonbanhang.khachhangtra - tongphieuthu;
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.getCustomerBills(this.id);
    }
};
PurchaseHistoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_purchase_history_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseHistoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PurchaseHistoryComponent.prototype, "listOrder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('chageToDebt')
], PurchaseHistoryComponent.prototype, "change", void 0);
PurchaseHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchase-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-detail/purchase-history/purchase-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchase-history.component.scss */ "./src/app/admin/customers/customer-detail/purchase-history/purchase-history.component.scss")).default]
    })
], PurchaseHistoryComponent);



/***/ }),

/***/ "./src/app/admin/customers/customers.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/customers/customers.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/customers/customers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/customers/customers.component.ts ***!
  \********************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/customers.service */ "./src/app/_services/customers.service.ts");
/* harmony import */ var src_app_models_khachhang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_models/khachhang */ "./src/app/_models/khachhang.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let CustomersComponent = class CustomersComponent {
    constructor(modalService, activatedRoute, router, customersService) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.customersService = customersService;
        this.itemsPerPage = 2;
        this.addCustomersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            makhachhang: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            ten: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            sdt: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            diachi: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            ngaysinh: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            gioitinh: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    ngOnInit() {
        this.searchTerm = '';
        this.fitlerloaikhachhang = 0;
        this.activatedRoute.data.subscribe(data => {
            this.listCustomers = data.customers.result;
            this.pagination = data.customers.pagination;
        });
        this.baseDataListCustomers = this.listCustomers;
    }
    search() {
        this.customersService.getSearchKhachHang(this.pagination.currentPage, this.pagination.itemsPerPage, this.searchTerm).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListBill(data.result);
        }, error => console.log(error));
    }
    getListCustomers() {
        this.customersService.getAllKhachHang(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListBill(data.result);
        }, 
        // tslint:disable-next-line: no-shadowed-variable
        error => console.log(error));
    }
    resetFilter() {
        this.searchkey = '';
    }
    editCustomer(makhachhang) {
        this.router.navigate(['/admin/customers/' + makhachhang]);
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.search();
    }
    getTotalCustomers() {
        if (this.listCustomers != null) {
            return this.listCustomers.length;
        }
    }
    getTotalMoney() {
        let total = 0;
        if (this.listCustomers != null) {
            for (const customers of this.listCustomers) {
                total += customers.tonggia;
            }
        }
        return total;
    }
    getTotalDet() {
        let total = 0;
        if (this.listCustomers != null) {
            for (const customers of this.listCustomers) {
                total += customers.tongno;
            }
        }
        return total;
    }
    filter() {
        if (this.fitlerloaikhachhang == 1) {
            this.listCustomers = this.baseDataListCustomers.filter(this.isNonDebt);
        }
        else if (this.fitlerloaikhachhang == 0) {
            this.listCustomers = this.baseDataListCustomers;
        }
        else {
            this.listCustomers = this.baseDataListCustomers.filter(this.isDebt);
        }
    }
    isNonDebt(customers) {
        return customers.createdAt != null;
    }
    isDebt(customers) {
        return customers.tongno > 0;
    }
    updateListBill(data) {
        this.listCustomers = data; // lưu dữ liệu bên html
        this.baseDataListCustomers = []; // lưu dữ liệu gốc
        if (data != null) {
            this.listCustomers.forEach(x => {
                this.baseDataListCustomers.push(x);
            });
        }
    }
    deleteCustomer(makhachhang) {
        if (confirm('Bạn có thực sự muốn xóa khách hàng này ?')) {
            this.customersService.deleteCustomer(makhachhang).subscribe(() => {
                this.getListCustomers();
                alert('Xóa thành công !');
            }, 
            // tslint:disable-next-line: no-shadowed-variable
            error => {
                console.log(error);
                alert('Xóa thất bại !');
            });
        }
    }
    addCustomer() {
        this.customer = new src_app_models_khachhang__WEBPACK_IMPORTED_MODULE_5__["KhachHang"]();
        this.customer.ten = this.addCustomersForm.controls['ten'].value;
        this.customer.sdt = this.addCustomersForm.controls['sdt'].value;
        this.customer.email = this.addCustomersForm.controls['email'].value;
        this.customer.diachi = this.addCustomersForm.controls['diachi'].value;
        this.customer.ngaysinh = this.addCustomersForm.controls['ngaysinh'].value;
        this.customer.gioitinh = this.addCustomersForm.controls['gioitinh'].value;
        this.customersService.addCustomer(this.customer).subscribe(next => {
            alert('Thêm thành công !');
            this.getListCustomers();
            this.modalRef.hide();
        }, error => {
            alert('Thêm thất bại');
            console.log(error);
        }, () => { });
    }
};
CustomersComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers.component.scss */ "./src/app/admin/customers/customers.component.scss")).default]
    })
], CustomersComponent);



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_bills_bh_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/bills-bh.service */ "./src/app/_services/bills-bh.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/customers.service */ "./src/app/_services/customers.service.ts");






let DashboardComponent = class DashboardComponent {
    constructor(authService, billService, prodService, custService) {
        this.authService = authService;
        this.billService = billService;
        this.prodService = prodService;
        this.custService = custService;
    }
    ngOnInit() {
        this.totalBill = 0;
        this.totalCust = 0;
        this.totalProd = 0;
        this.totalMoney = 0;
        this.getTotalBill();
        this.getTotalProd();
        this.getTotalCust();
    }
    getTotalBill() {
        return this.billService.getListBill(1, 1).subscribe(data => {
            if (data != null) {
                this.totalBill = data.totalElements;
            }
            return 0;
        });
    }
    getTotalProd() {
        return this.prodService.getProductPage(1, 1).subscribe(data => {
            if (data != null) {
                this.totalProd = data.totalElements;
            }
            return 0;
        });
    }
    getTotalCust() {
        return this.custService.getAllKhachHang(1, 1).subscribe(data => {
            if (data != null) {
                this.totalCust = data.totalElements;
            }
            return 0;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_bills_bh_service__WEBPACK_IMPORTED_MODULE_3__["BillsBhService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_5__["CustomersService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/admin/layout/content/content.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/layout/content/content.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/layout/content/content.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/layout/content/content.component.ts ***!
  \***********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentComponent = class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.scss */ "./src/app/admin/layout/content/content.component.scss")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/admin/layout/control-sidebar/control-sidebar.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/layout/control-sidebar/control-sidebar.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9jb250cm9sLXNpZGViYXIvY29udHJvbC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/layout/control-sidebar/control-sidebar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/layout/control-sidebar/control-sidebar.component.ts ***!
  \***************************************************************************/
/*! exports provided: ControlSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlSidebarComponent", function() { return ControlSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ControlSidebarComponent = class ControlSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
ControlSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-control-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./control-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/control-sidebar/control-sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./control-sidebar.component.scss */ "./src/app/admin/layout/control-sidebar/control-sidebar.component.scss")).default]
    })
], ControlSidebarComponent);



/***/ }),

/***/ "./src/app/admin/layout/footer/footer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/layout/footer/footer.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/layout/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/layout/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/admin/layout/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/admin/layout/header/header.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/layout/header/header.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/layout/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/layout/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
    logOut() {
        this.authService.logOut();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/admin/layout/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/admin/layout/left-side/left-side.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/admin/layout/left-side/left-side.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xheW91dC9sZWZ0LXNpZGUvbGVmdC1zaWRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/layout/left-side/left-side.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/layout/left-side/left-side.component.ts ***!
  \***************************************************************/
/*! exports provided: LeftSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSideComponent", function() { return LeftSideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LeftSideComponent = class LeftSideComponent {
    constructor() { }
    ngOnInit() {
    }
};
LeftSideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-left-side',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./left-side.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/layout/left-side/left-side.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./left-side.component.scss */ "./src/app/admin/layout/left-side/left-side.component.scss")).default]
    })
], LeftSideComponent);



/***/ }),

/***/ "./src/app/admin/orders/edit-order/edit-order.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/admin/orders/edit-order/edit-order.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL29yZGVycy9lZGl0LW9yZGVyL2VkaXQtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/orders/edit-order/edit-order.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/orders/edit-order/edit-order.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderComponent", function() { return EditOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_chitiethoadonbh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_models/chitiethoadonbh */ "./src/app/_models/chitiethoadonbh.ts");
/* harmony import */ var src_app_models_khachhang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_models/khachhang */ "./src/app/_models/khachhang.ts");
/* harmony import */ var src_app_services_bills_bh_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/bills-bh.service */ "./src/app/_services/bills-bh.service.ts");
/* harmony import */ var src_app_services_bill_detail_bh_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_services/bill-detail-bh.service */ "./src/app/_services/bill-detail-bh.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_services/customers.service */ "./src/app/_services/customers.service.ts");













let EditOrderComponent = class EditOrderComponent {
    constructor(modalService, productService, activatedRoute, billService, detailBillService, customersService, router) {
        this.modalService = modalService;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.billService = billService;
        this.detailBillService = detailBillService;
        this.customersService = customersService;
        this.router = router;
        this.addCustomersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            makhachhang: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            ten: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            sdt: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            diachi: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            ngaysinh: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            gioitinh: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
        });
        this.listMethodBill = [
            'Tiền mặt',
            'Thẻ',
            'Chuyển khoản'
        ];
        this.listStatusBill = [
            'Khởi tạo',
            'Đang xử lý',
            'Đang giao',
            'Hoàn thành',
            'Tạm dừng',
            'Đã hủy'
        ];
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    ngOnInit() {
        this.i = 0;
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.activatedRoute.data.subscribe(data => {
            this.statesComplex = data.prods;
            this.statesComplexKhachHang = data.custs;
            this.hoadonbanhang = data.bill;
            this.asyncSelectedKhachHang = data.bill.khachhang.makhachhang;
            this.listchitiethoadon = data.bill.chitiethoadons;
            this.giamgiaBill = data.bill.giamgia;
            this.khachduaBill = data.bill.khachhangtra;
            this.khachhang = data.bill.khachhang;
            this.methodPay = data.bill.loaithanhtoan;
            this.ghichu = data.bill.ghichu;
        });
        this.dataSource = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            // Runs on every search
            observer.next(this.asyncSelected);
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((token) => this.getStatesAsObservable(token)));
        this.dataSourceKhachHang = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            // Runs on every search
            observer.next(this.asyncSelectedKhachHang);
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((token) => this.getStatesAsObservableKhachHang(token)));
    }
    getStatesAsObservable(token) {
        const query = new RegExp(token, 'i');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.statesComplex.filter((state) => {
            return query.test(state.name) || query.test(state.masp);
        }));
    }
    getStatesAsObservableKhachHang(token) {
        const query = new RegExp(token, 'i');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.statesComplexKhachHang.filter((state) => {
            return query.test(state.makhachhang) || query.test(state.ten) || query.test(state.sdt);
        }));
    }
    changeTypeaheadLoading(e) {
        this.typeaheadLoading = e;
    }
    typeaheadOnSelect(e) {
        // init ChiTietHoaDon
        this.chitiethoadon = new src_app_models_chitiethoadonbh__WEBPACK_IMPORTED_MODULE_7__["ChiTietHoaDonBH"]();
        const prod = this.findProdByMaSP(e.value);
        if (prod !== undefined) {
            this.chitiethoadon.sanpham = prod;
            this.chitiethoadon.giamgia = 0;
            this.chitiethoadon.soluong = 1;
            this.chitiethoadon.gia = this.chitiethoadon.sanpham.giaban * this.chitiethoadon.soluong;
            this.i++;
            this.chitiethoadon.id_hoadon = this.hoadonbanhang.id;
            // add ChiTietHoaDon to HoaDon
            this.listchitiethoadon.push(this.chitiethoadon);
        }
        this.asyncSelected = '';
    }
    typeaheadOnSelectKhachHang(e) {
        this.khachhang = this.findCustByMaKH(e.value);
    }
    findProdByMaSP(masp) {
        return this.statesComplex.filter(x => {
            return this.listchitiethoadon.find(y => y.sanpham.masp === masp) == null;
        })
            .find(x => x.masp === masp);
    }
    findCustByMaKH(makh) {
        return this.statesComplexKhachHang.find(x => x.makhachhang === makh);
    }
    getTotalProdCost() {
        let total = 0;
        this.listchitiethoadon.forEach(x => {
            total += x.sanpham.giaban * x.soluong - x.giamgia;
        });
        return total;
    }
    getTotalCost() {
        return this.getTotalProdCost() - this.giamgiaBill;
    }
    getDebt() {
        let tongphieuthu = 0;
        if (this.hoadonbanhang.phieuthus != null) {
            this.hoadonbanhang.phieuthus.forEach(element => {
                tongphieuthu += element.sotienthu;
            });
        }
        return this.getTotalCost() - this.khachduaBill - tongphieuthu;
    }
    checkoutBill() {
        if (this.listchitiethoadon.length === 0) {
            alert('Bạn chưa thêm sản phẩm nào. Vui lòng thêm sản phẩm trước khi Lưu hóa đơn!');
        }
        else if (this.getDebt() < 0) {
            alert('Số tiền còn nợ không được âm!');
        }
        else {
            this.hoadonbanhang.ghichu = this.ghichu;
            this.hoadonbanhang.updatedAt = new Date();
            this.hoadonbanhang.giamgia = this.giamgiaBill;
            this.hoadonbanhang.khachhang = this.khachhang;
            this.hoadonbanhang.khachhangtra = this.khachduaBill;
            this.hoadonbanhang.loaithanhtoan = this.methodPay;
            this.hoadonbanhang.tonggia = this.getTotalCost();
            this.hoadonbanhang.trangthai = this.hoadonbanhang.trangthai == 0 ? 1 : this.hoadonbanhang.trangthai;
            this.hoadonbanhang.nguoisua = this.currentUser;
            this.hoadonbanhang.chitiethoadons = this.listchitiethoadon;
            if (!this.checkInputKhachhang()) {
                alert('Vui lòng chọn khách hàng');
            }
            else {
                this.billService.putBill(this.hoadonbanhang).subscribe(() => {
                    alert('Lưu thành công');
                    this.router.navigate(['/admin/orders']);
                }, error => {
                    if (error.status === 400) {
                        alert('Số lượng sản phẩm trong Kho không đủ!');
                    }
                    else {
                        alert('Không thể Lưu hóa đơn lúc này!');
                        console.log(error);
                    }
                });
            }
        }
    }
    deleteChitietBill(index) {
        this.listchitiethoadon.splice(index, 1);
    }
    checkInputKhachhang() {
        if (this.khachhang === undefined) {
            return false;
        }
        return true;
    }
    addCustomer() {
        this.customerAdd = new src_app_models_khachhang__WEBPACK_IMPORTED_MODULE_8__["KhachHang"]();
        this.customerAdd.ten = this.addCustomersForm.controls['ten'].value;
        this.customerAdd.sdt = this.addCustomersForm.controls['sdt'].value;
        this.customerAdd.email = this.addCustomersForm.controls['email'].value;
        this.customerAdd.diachi = this.addCustomersForm.controls['diachi'].value;
        this.customerAdd.ngaysinh = this.addCustomersForm.controls['ngaysinh'].value;
        this.customerAdd.gioitinh = this.addCustomersForm.controls['gioitinh'].value;
        this.customersService.addCustomer(this.customerAdd).subscribe(next => {
            alert('Thêm thành công !');
            this.asyncSelectedKhachHang = next.makhachhang;
            this.khachhang = next;
            this.getListCustomers();
            this.modalRef.hide();
        }, error => {
            alert('Thêm thất bại');
            console.log(error);
        }, () => { });
    }
    getListCustomers() {
        this.customersService.getAllKHNonPag().subscribe((data) => {
            this.statesComplexKhachHang = data;
        }, error => console.log(error));
    }
    completeBill() {
        // => status to 3
        this.saveBill(3);
    }
    deliveringBill() {
        // => status to 2
        this.saveBill(2);
    }
    onHoldBill() {
        // => status to 4
        this.saveBill(4);
    }
    cancleBill() {
        this.hoadonbanhang.updatedAt = new Date();
        this.hoadonbanhang.trangthai = 5;
        this.hoadonbanhang.ghichu = this.ghichu;
        this.hoadonbanhang.nguoisua = this.currentUser;
        this.billService.cancleBill(this.hoadonbanhang).subscribe(() => {
            alert('Lưu thành công');
            this.router.navigate(['/admin/orders']);
        }, error => {
            if (error.status === 400) {
                alert('Số lượng sản phẩm trong Kho không đủ!');
            }
            else {
                alert('Không thể Lưu hóa đơn lúc này!');
                console.log(error);
            }
        });
    }
    saveBill(status) {
        if (this.listchitiethoadon.length === 0) {
            alert('Bạn chưa thêm sản phẩm nào. Vui lòng thêm sản phẩm trước khi Lưu hóa đơn!');
        }
        else if (this.getDebt() < 0) {
            alert('Số tiền còn nợ không được âm!');
        }
        else {
            this.hoadonbanhang.ghichu = this.ghichu;
            this.hoadonbanhang.updatedAt = new Date();
            this.hoadonbanhang.giamgia = this.giamgiaBill;
            this.hoadonbanhang.khachhang = this.khachhang;
            this.hoadonbanhang.khachhangtra = this.khachduaBill;
            this.hoadonbanhang.loaithanhtoan = this.methodPay;
            this.hoadonbanhang.tonggia = this.getTotalCost();
            this.hoadonbanhang.trangthai = status;
            this.hoadonbanhang.nguoisua = this.currentUser;
            this.hoadonbanhang.chitiethoadons = this.listchitiethoadon;
            if (!this.checkInputKhachhang()) {
                alert('Vui lòng chọn khách hàng');
            }
            else {
                this.billService.putBill(this.hoadonbanhang).subscribe(() => {
                    alert('Lưu thành công');
                    this.router.navigate(['/admin/orders']);
                }, error => {
                    if (error.status === 400) {
                        alert('Số lượng sản phẩm trong Kho không đủ!');
                    }
                    else {
                        alert('Không thể Lưu hóa đơn lúc này!');
                        console.log(error);
                    }
                });
            }
        }
    }
};
EditOrderComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_services_bills_bh_service__WEBPACK_IMPORTED_MODULE_9__["BillsBhService"] },
    { type: src_app_services_bill_detail_bh_service__WEBPACK_IMPORTED_MODULE_10__["BillDetailBhService"] },
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_12__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
EditOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/edit-order/edit-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-order.component.scss */ "./src/app/admin/orders/edit-order/edit-order.component.scss")).default]
    })
], EditOrderComponent);



/***/ }),

/***/ "./src/app/admin/orders/orders.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/orders/orders.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tr-hide {\n  display: none;\n}\n\n.padding-left-10 {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vb3JkZXJzL0Q6XFxKQVZBX1dvcmtzcGFjZVxcRkUvc3JjXFxhcHBcXGFkbWluXFxvcmRlcnNcXG9yZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyLWhpZGV7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuLnBhZGRpbmctbGVmdC0xMCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG4iLCIudHItaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wYWRkaW5nLWxlZnQtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/orders/orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_bills_bh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/bills-bh.service */ "./src/app/_services/bills-bh.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let OrdersComponent = class OrdersComponent {
    constructor(orderService, router, activatedRoute) {
        this.orderService = orderService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.maxDate = new Date();
        this.listMethodBill = [
            'Tiền mặt',
            'Thẻ',
            'Chuyển khoản'
        ];
        this.listStatusBill = [
            'Khởi tạo',
            'Đang xử lý',
            'Đang giao',
            'Hoàn thành',
            'Tạm dừng',
            'Đã hủy'
        ];
        this.itemsPerPage = 4;
        this.listSubTrTableBill = [];
    }
    ngOnInit() {
        this.fitlerloaidonhang = 0;
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.listBills = new Array();
        this.pagination = {
            currentPage: 1,
            totalItems: 0,
            totalPages: 0,
            itemsPerPage: this.itemsPerPage
        };
        this.resetFilter();
        this.baseDataListBills = [];
        this.activatedRoute.data.subscribe(data => {
            this.updateListBill(data.bills.result);
            this.pagination = data.bills.pagination;
        });
    }
    getTotalChiTietBillByIdBill(hoadon) {
        return typeof (hoadon.chitiethoadons) !== 'undefined'
            ? hoadon.chitiethoadons.length : 0;
    }
    toggleChiTietHoaDon(id) {
        this.listSubTrTableBill[id] = !this.listSubTrTableBill[id];
    }
    editBill(maHD) {
        this.router.navigate(['/admin/orders/' + maHD]);
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.search();
    }
    deleteBill(maHD) {
        if (confirm('Bạn thực sự muốn xóa Hóa đơn này?')) {
            this.orderService.deleteBill(maHD).subscribe(() => {
                this.getListBill();
                alert('Xóa thành công!');
            }, error => {
                console.log(error);
                alert('Xóa thất bại!');
            });
        }
    }
    search() {
        if ((this.fromdate == null && this.todate == null) ||
            (typeof (this.todate) === 'undefined') && (typeof (this.fromdate) === 'undefined')) {
            this.orderService.getSearchListBill(this.pagination.currentPage, this.pagination.itemsPerPage, this.searchTerm, '', '').subscribe((data) => {
                if (typeof (data.pagination) !== 'undefined') {
                    this.pagination = data.pagination;
                }
                else {
                    this.pagination = {
                        currentPage: 1,
                        totalItems: 0,
                        totalPages: 0,
                        itemsPerPage: this.itemsPerPage
                    };
                }
                this.updateListBill(data.result);
            }, error => console.log(error));
        }
        else {
            if (typeof (this.searchTerm) === 'undefined' || this.searchTerm === null) {
                this.searchTerm = '';
            }
            if (typeof (this.fromdate) === 'undefined' || this.fromdate === null) {
                this.fromdate = new Date();
            }
            if (typeof (this.todate) === 'undefined' || this.todate === null) {
                this.todate = new Date();
            }
            const date1 = this.fromdate.getDate() + '/' + (this.fromdate.getMonth() + 1) + '/' + this.fromdate.getFullYear();
            const date2 = (this.todate.getDate() + 1) + '/' + (this.todate.getMonth() + 1) + '/' + this.todate.getFullYear();
            this.orderService.getSearchListBill(this.pagination.currentPage, this.pagination.itemsPerPage, this.searchTerm, date1, date2).subscribe((data) => {
                if (typeof (data.pagination) !== 'undefined') {
                    this.pagination = data.pagination;
                }
                else {
                    this.pagination = {
                        currentPage: 1,
                        totalItems: 0,
                        totalPages: 0,
                        itemsPerPage: this.itemsPerPage
                    };
                }
                this.updateListBill(data.result);
            }, error => console.log(error));
        }
    }
    filter() {
        if (this.fitlerloaidonhang == 2) {
            this.listBills = this.baseDataListBills.filter(this.isDebt);
        }
        else if (this.fitlerloaidonhang == 0) {
            this.listBills = this.baseDataListBills;
        }
        else {
            this.listBills = this.baseDataListBills.filter(this.isNonDebt);
        }
    }
    resetFilter() {
        this.searchTerm = '';
        this.fromdate = null;
        this.todate = null;
    }
    getBillOfWeek() {
        const start = this.getDateOfWeek(49, 2019);
        const end = this.getDateOfWeek(50, 2019);
        this.fromdate = start;
        this.todate = end;
        const date1 = start.getDate() + '/' + (start.getMonth() + 1) + '/' + start.getFullYear();
        const date2 = (end.getDate()) + '/' + (end.getMonth() + 1) + '/' + end.getFullYear();
        this.orderService.getSearchListBill(this.pagination.currentPage, this.pagination.itemsPerPage, this.searchTerm, date1, date2).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListBill(data.result);
        }, error => console.log(error));
    }
    getBillOfMonth() {
        const now = new Date();
        const start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 1, 0);
        const end = new Date(now.getFullYear(), now.getMonth(), this.getDaysInMonth(now.getMonth() + 1, now.getFullYear()), 0, 0, 1, 0);
        this.fromdate = start;
        this.todate = end;
        const date1 = start.getDate() + '/' + (start.getMonth() + 1) + '/' + start.getFullYear();
        const date2 = end.getDate() + '/' + (end.getMonth() + 1) + '/' + end.getFullYear();
        this.orderService.getSearchListBill(this.pagination.currentPage, this.pagination.itemsPerPage, this.searchTerm, date1, date2).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListBill(data.result);
        }, error => console.log(error));
    }
    getBillOfYear() {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 1, 0, 0, 1, 0);
        const end = new Date(now.getFullYear(), 11, 31, 0, 0, 1, 0);
        this.fromdate = start;
        this.todate = end;
        const date1 = start.getDate() + '/' + (start.getMonth() + 1) + '/' + start.getFullYear();
        const date2 = end.getDate() + '/' + (end.getMonth() + 1) + '/' + end.getFullYear();
        this.orderService.getSearchListBill(this.pagination.currentPage, this.pagination.itemsPerPage, this.searchTerm, date1, date2).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListBill(data.result);
        }, error => console.log(error));
    }
    isDebt(hoadon) {
        return hoadon.tonggia - hoadon.giamgia - hoadon.khachhangtra > 0;
    }
    isNonDebt(hoadon) {
        return hoadon.tonggia - hoadon.giamgia - hoadon.khachhangtra <= 0;
    }
    getTotal() {
        let total = 0;
        if (this.listBills != null) {
            for (const bill of this.listBills) {
                total += bill.tonggia;
            }
        }
        return total;
    }
    getTotalDebt() {
        let total = 0;
        if (this.listBills != null) {
            for (const customerBillsDebt of this.listBills) {
                total += this.getDebt(customerBillsDebt);
            }
        }
        return total;
    }
    getDebt(hoadonbanhang) {
        let tongphieuthu = 0;
        if (hoadonbanhang.phieuthus != null) {
            hoadonbanhang.phieuthus.forEach(element => {
                tongphieuthu += element.sotienthu;
            });
        }
        return hoadonbanhang.tonggia - hoadonbanhang.khachhangtra - tongphieuthu;
    }
    getTotalBills() {
        if (this.listBills != null) {
            return this.listBills.length;
        }
        return 0;
    }
    getListBill() {
        this.orderService.getListBill(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListBill(data.result);
        }, error => console.log(error));
    }
    getDateOfWeek(w, y) {
        const simple = new Date(y, 0, 1 + (w - 1) * 7);
        const dow = simple.getDay();
        const ISOweekStart = simple;
        if (dow <= 4) {
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        }
        else {
            ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        }
        return ISOweekStart;
    }
    getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
    updateListBill(data) {
        this.listBills = data;
        this.baseDataListBills = [];
        this.listSubTrTableBill = [];
        if (data != null) {
            this.listBills.forEach(x => {
                this.baseDataListBills.push(x);
                this.listSubTrTableBill.push(false);
            });
        }
    }
};
OrdersComponent.ctorParameters = () => [
    { type: src_app_services_bills_bh_service__WEBPACK_IMPORTED_MODULE_2__["BillsBhService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        selector: 'app-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.component.scss */ "./src/app/admin/orders/orders.component.scss")).default]
    })
], OrdersComponent);



/***/ }),

/***/ "./src/app/admin/orders/sell-prod/choose-prod/choose-prod.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/orders/sell-prod/choose-prod/choose-prod.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  box-shadow: 10px 11px 13px 2px rgba(0, 0, 0, 0.77);\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.is-selected {\n  border: 1px solid blue;\n}\n\n.red {\n  color: red;\n}\n\n.shadow-left {\n  border-left: 1px solid #c2c0c2;\n}\n\n.margin-bottom-20 {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vb3JkZXJzL3NlbGwtcHJvZC9jaG9vc2UtcHJvZC9EOlxcSkFWQV9Xb3Jrc3BhY2VcXEZFL3NyY1xcYXBwXFxhZG1pblxcb3JkZXJzXFxzZWxsLXByb2RcXGNob29zZS1wcm9kXFxjaG9vc2UtcHJvZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vb3JkZXJzL3NlbGwtcHJvZC9jaG9vc2UtcHJvZC9jaG9vc2UtcHJvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGtEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDRSxzQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBRERBO0VBQ0UsOEJBQUE7QUNJRjs7QURGQTtFQUNFLG1CQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9vcmRlcnMvc2VsbC1wcm9kL2Nob29zZS1wcm9kL2Nob29zZS1wcm9kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDExcHggMTNweCAycHggcmdiYSgwLDAsMCwwLjc3KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMXB4IDEzcHggMnB4IHJnYmEoMCwwLDAsMC43Nyk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDExcHggMTNweCAycHggcmdiYSgwLDAsMCwwLjc3KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmlzLXNlbGVjdGVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG59XHJcbi5yZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLnNoYWRvdy1sZWZ0IHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjMmMwYzI7XHJcbn1cclxuLm1hcmdpbi1ib3R0b20tMjAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIiwiLmNhcmQge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTFweCAxM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzcpO1xuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTFweCAxM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzcpO1xuICBib3gtc2hhZG93OiAxMHB4IDExcHggMTNweCAycHggcmdiYSgwLCAwLCAwLCAwLjc3KTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaXMtc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNoYWRvdy1sZWZ0IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYzJjMGMyO1xufVxuXG4ubWFyZ2luLWJvdHRvbS0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/orders/sell-prod/choose-prod/choose-prod.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/orders/sell-prod/choose-prod/choose-prod.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChooseProdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseProdComponent", function() { return ChooseProdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/product.service */ "./src/app/_services/product.service.ts");



let ChooseProdComponent = class ChooseProdComponent {
    constructor(prodService) {
        this.prodService = prodService;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.searchProdKey = '';
        if (this.listProd != null) {
            this.currentProd = this.listProd[0];
        }
        this.baseListPrd = this.listProd;
    }
    changeCurrentProd(sp) {
        this.currentProd = sp;
    }
    submitAddProd(masp) {
        this.submit.emit(masp);
    }
    filterProd() {
        this.prodService.getSearchListProduct(1, 99999, this.searchProdKey).subscribe(data => {
            this.listProd = data.result;
        }, error => { console.error(error); });
    }
};
ChooseProdComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChooseProdComponent.prototype, "listProd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('SubmitChooseProd')
], ChooseProdComponent.prototype, "submit", void 0);
ChooseProdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choose-prod',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choose-prod.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/sell-prod/choose-prod/choose-prod.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./choose-prod.component.scss */ "./src/app/admin/orders/sell-prod/choose-prod/choose-prod.component.scss")).default]
    })
], ChooseProdComponent);



/***/ }),

/***/ "./src/app/admin/orders/sell-prod/sell-prod.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/admin/orders/sell-prod/sell-prod.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-right-10 {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vb3JkZXJzL3NlbGwtcHJvZC9EOlxcSkFWQV9Xb3Jrc3BhY2VcXEZFL3NyY1xcYXBwXFxhZG1pblxcb3JkZXJzXFxzZWxsLXByb2RcXHNlbGwtcHJvZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vb3JkZXJzL3NlbGwtcHJvZC9zZWxsLXByb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vb3JkZXJzL3NlbGwtcHJvZC9zZWxsLXByb2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXJpZ2h0LTEwIHtcclxuICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufVxyXG4iLCIubWFyZ2luLXJpZ2h0LTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/orders/sell-prod/sell-prod.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/orders/sell-prod/sell-prod.component.ts ***!
  \***************************************************************/
/*! exports provided: SellProdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellProdComponent", function() { return SellProdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_hoadonbanhang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_models/hoadonbanhang */ "./src/app/_models/hoadonbanhang.ts");
/* harmony import */ var src_app_models_chitiethoadonbh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_models/chitiethoadonbh */ "./src/app/_models/chitiethoadonbh.ts");
/* harmony import */ var src_app_models_khachhang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_models/khachhang */ "./src/app/_models/khachhang.ts");
/* harmony import */ var src_app_services_bills_bh_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_services/bills-bh.service */ "./src/app/_services/bills-bh.service.ts");
/* harmony import */ var src_app_services_bill_detail_bh_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_services/bill-detail-bh.service */ "./src/app/_services/bill-detail-bh.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_services/customers.service */ "./src/app/_services/customers.service.ts");














let SellProdComponent = class SellProdComponent {
    constructor(modalService, productService, activatedRoute, billService, detailBillService, customersService, router) {
        this.modalService = modalService;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.billService = billService;
        this.detailBillService = detailBillService;
        this.customersService = customersService;
        this.router = router;
        this.addCustomersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroup"]({
            makhachhang: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](''),
            ten: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](''),
            sdt: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](''),
            diachi: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](''),
            ngaysinh: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](''),
            gioitinh: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](''),
        });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    ngOnInit() {
        this.i = 0;
        this.giamgiaBill = 0;
        this.khachduaBill = 0;
        this.listchitiethoadon = [];
        this.methodPay = 1;
        this.ghichu = '';
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.activatedRoute.data.subscribe(data => {
            this.statesComplex = data.prods;
            this.statesComplexKhachHang = data.custs;
        });
        this.dataSource = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            // Runs on every search
            observer.next(this.asyncSelected);
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((token) => this.getStatesAsObservable(token)));
        this.dataSourceKhachHang = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            // Runs on every search
            observer.next(this.asyncSelectedKhachHang);
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((token) => this.getStatesAsObservableKhachHang(token)));
    }
    // Function for get Product
    loadProducts() {
        this.productService.getListProduct().subscribe(data => {
            this.statesComplex = data;
        }, error => console.log(error));
    }
    getStatesAsObservable(token) {
        const query = new RegExp(token, 'i');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.statesComplex.filter((state) => {
            return query.test(state.name) || query.test(state.masp);
        }));
    }
    getStatesAsObservableKhachHang(token) {
        const query = new RegExp(token, 'i');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.statesComplexKhachHang.filter((state) => {
            return query.test(state.makhachhang) || query.test(state.ten) || query.test(state.sdt);
        }));
    }
    changeTypeaheadLoading(e) {
        this.typeaheadLoading = e;
    }
    typeaheadOnSelect(e) {
        // init ChiTietHoaDon
        this.chitiethoadon = new src_app_models_chitiethoadonbh__WEBPACK_IMPORTED_MODULE_8__["ChiTietHoaDonBH"]();
        const prod = this.findProdByMaSP(e.value);
        if (prod !== undefined) {
            this.chitiethoadon.sanpham = prod;
            this.chitiethoadon.giamgia = 0;
            this.chitiethoadon.soluong = 1;
            this.chitiethoadon.gia = this.chitiethoadon.sanpham.giaban * this.chitiethoadon.soluong;
            this.listchitiethoadon.push(this.chitiethoadon);
        }
        this.asyncSelected = '';
    }
    typeaheadOnSelectKhachHang(e) {
        this.khachhang = this.findCustByMaKH(e.value);
    }
    findProdByMaSP(masp) {
        return this.statesComplex.filter(x => {
            return this.listchitiethoadon.find(y => y.sanpham.masp === masp) == null;
        })
            .find(x => x.masp === masp);
    }
    findCustByMaKH(makh) {
        return this.statesComplexKhachHang.find(x => x.makhachhang === makh);
    }
    getTotalProdCost() {
        let total = 0;
        this.listchitiethoadon.forEach(x => {
            total += x.sanpham.giaban * x.soluong - x.giamgia;
        });
        return total;
    }
    getTotalCost() {
        return this.getTotalProdCost() - this.giamgiaBill;
    }
    getDebt() {
        return this.getTotalCost() - this.khachduaBill;
    }
    checkoutBill() {
        if (this.listchitiethoadon.length === 0) {
            alert('Bạn chưa thêm sản phẩm nào. Vui lòng thêm sản phẩm trước khi Lưu hóa đơn!');
        }
        else if (this.getDebt() < 0) {
            alert('Số tiền còn nợ không được âm!');
        }
        else {
            this.customersService.getDebtCustomer(this.khachhang.makhachhang).subscribe(data => {
                if (data.tongno > 1000000) {
                    if (confirm('Khách hàng này có tổng dư nợ trên 1 triệu đồng, bạn thực sự muốn thanh toán?')) {
                        this.hoadonbanhang = new src_app_models_hoadonbanhang__WEBPACK_IMPORTED_MODULE_7__["HoaDonBanHang"]();
                        this.hoadonbanhang.createdAt = new Date();
                        this.hoadonbanhang.ghichu = this.ghichu;
                        this.hoadonbanhang.giamgia = this.giamgiaBill;
                        this.hoadonbanhang.khachhang = this.khachhang;
                        this.hoadonbanhang.khachhangtra = this.khachduaBill;
                        this.hoadonbanhang.loaithanhtoan = this.methodPay;
                        this.hoadonbanhang.nguoitao = this.currentUser;
                        this.hoadonbanhang.mahoadon = '';
                        this.hoadonbanhang.trangthai = 1;
                        this.hoadonbanhang.tonggia = this.getTotalCost();
                        let currentBillID = 0;
                        if (!this.checkInputKhachhang()) {
                            alert('Vui lòng chọn khách hàng');
                        }
                        else {
                            this.billService.postBill(this.hoadonbanhang).subscribe(data => {
                                currentBillID = data.id;
                                this.listchitiethoadon.forEach(x => x.id_hoadon = currentBillID);
                                this.detailBillService.postDetailsBill(this.listchitiethoadon).subscribe(() => {
                                    alert('Lưu thành công');
                                    this.router.navigate(['/admin/orders']);
                                }, error => {
                                    if (error.status === 400) {
                                        this.billService.deleteBill(currentBillID).subscribe(() => {
                                            alert('Số lượng sản phẩm trong Kho không đủ!');
                                        }, error => {
                                            console.log(error);
                                        });
                                    }
                                    else {
                                        alert('Không thể Lưu hóa đơn lúc này!');
                                        console.log(error);
                                    }
                                });
                            }, error => console.log(error));
                        }
                    }
                }
            });
        }
    }
    initBill() {
        if (this.getDebt() < 0) {
            alert('Số tiền còn nợ không được âm!');
        }
        else {
            this.hoadonbanhang = new src_app_models_hoadonbanhang__WEBPACK_IMPORTED_MODULE_7__["HoaDonBanHang"]();
            this.hoadonbanhang.createdAt = new Date();
            this.hoadonbanhang.giamgia = this.giamgiaBill;
            this.hoadonbanhang.khachhang = this.khachhang;
            this.hoadonbanhang.khachhangtra = this.khachduaBill;
            this.hoadonbanhang.loaithanhtoan = this.methodPay;
            this.hoadonbanhang.nguoitao = this.currentUser;
            this.hoadonbanhang.ghichu = this.ghichu;
            this.hoadonbanhang.mahoadon = '';
            this.hoadonbanhang.trangthai = 0;
            this.hoadonbanhang.tonggia = this.getTotalCost();
            let currentBillID = 0;
            if (!this.checkInputKhachhang()) {
                alert('Vui lòng chọn khách hàng');
            }
            else {
                this.billService.postBill(this.hoadonbanhang).subscribe(data => {
                    currentBillID = data.id;
                    if (this.listchitiethoadon != null) {
                        this.listchitiethoadon.forEach(x => x.id_hoadon = currentBillID);
                        this.detailBillService.postDetailsBill(this.listchitiethoadon).subscribe(() => {
                            alert('Lưu thành công');
                            this.router.navigate(['/admin/orders']);
                        }, error => {
                            if (error.status === 400) {
                                this.billService.deleteBill(currentBillID).subscribe(() => {
                                    alert('Số lượng sản phẩm trong Kho không đủ!');
                                }, error => console.log(error));
                            }
                            else {
                                alert('Không thể Lưu hóa đơn lúc này!');
                                console.log(error);
                            }
                        });
                    }
                }, error => console.log(error));
            }
        }
    }
    deleteChitietBill(index) {
        this.listchitiethoadon.splice(index, 1);
    }
    checkInputKhachhang() {
        if (this.khachhang === undefined) {
            return false;
        }
        return true;
    }
    emitSubmitChooseProd(event) {
        this.chitiethoadon = new src_app_models_chitiethoadonbh__WEBPACK_IMPORTED_MODULE_8__["ChiTietHoaDonBH"]();
        const prod = this.findProdByMaSP(event);
        if (prod !== undefined) {
            this.chitiethoadon.sanpham = prod;
            this.chitiethoadon.giamgia = 0;
            this.chitiethoadon.soluong = 1;
            this.chitiethoadon.gia = this.chitiethoadon.sanpham.giaban * this.chitiethoadon.soluong;
            this.listchitiethoadon.push(this.chitiethoadon);
        }
    }
    showPopupChooseProd(event, template) {
        if (event.code === 'F2') {
            this.modalRefChooseProd = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
        }
    }
    addCustomer() {
        this.customerAdd = new src_app_models_khachhang__WEBPACK_IMPORTED_MODULE_9__["KhachHang"]();
        this.customerAdd.ten = this.addCustomersForm.controls['ten'].value;
        this.customerAdd.sdt = this.addCustomersForm.controls['sdt'].value;
        this.customerAdd.email = this.addCustomersForm.controls['email'].value;
        this.customerAdd.diachi = this.addCustomersForm.controls['diachi'].value;
        this.customerAdd.ngaysinh = this.addCustomersForm.controls['ngaysinh'].value;
        this.customerAdd.gioitinh = this.addCustomersForm.controls['gioitinh'].value;
        this.customersService.addCustomer(this.customerAdd).subscribe(next => {
            alert('Thêm thành công !');
            this.asyncSelectedKhachHang = next.makhachhang;
            this.khachhang = next;
            this.getListCustomers();
            this.modalRef.hide();
        }, error => {
            alert('Thêm thất bại');
            console.log(error);
        }, () => { });
    }
    getListCustomers() {
        this.customersService.getAllKHNonPag().subscribe((data) => {
            this.statesComplexKhachHang = data;
        }, error => console.log(error));
    }
    completeBill() {
        // => status to 3
        this.saveBill(3);
    }
    saveBill(status) {
        if (this.listchitiethoadon.length === 0) {
            alert('Bạn chưa thêm sản phẩm nào. Vui lòng thêm sản phẩm trước khi Lưu hóa đơn!');
        }
        else if (this.getDebt() < 0) {
            alert('Số tiền còn nợ không được âm!');
        }
        else {
            this.hoadonbanhang.updatedAt = new Date();
            this.hoadonbanhang.giamgia = this.giamgiaBill;
            this.hoadonbanhang.khachhang = this.khachhang;
            this.hoadonbanhang.khachhangtra = this.khachduaBill;
            this.hoadonbanhang.loaithanhtoan = this.methodPay;
            this.hoadonbanhang.tonggia = this.getTotalCost();
            this.hoadonbanhang.trangthai = status;
            this.hoadonbanhang.ghichu = this.ghichu;
            this.hoadonbanhang.nguoisua = this.currentUser;
            this.hoadonbanhang.chitiethoadons = this.listchitiethoadon;
            if (!this.checkInputKhachhang()) {
                alert('Vui lòng chọn khách hàng');
            }
            else {
                this.billService.putBill(this.hoadonbanhang).subscribe(() => {
                    alert('Lưu thành công');
                    this.router.navigate(['/admin/orders']);
                }, error => {
                    if (error.status === 400) {
                        alert('Số lượng sản phẩm trong Kho không đủ!');
                    }
                    else {
                        alert('Không thể Lưu hóa đơn lúc này!');
                        console.log(error);
                    }
                });
            }
        }
    }
};
SellProdComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_services_bills_bh_service__WEBPACK_IMPORTED_MODULE_10__["BillsBhService"] },
    { type: src_app_services_bill_detail_bh_service__WEBPACK_IMPORTED_MODULE_11__["BillDetailBhService"] },
    { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_13__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SellProdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sell-prod',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sell-prod.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/sell-prod/sell-prod.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sell-prod.component.scss */ "./src/app/admin/orders/sell-prod/sell-prod.component.scss")).default]
    })
], SellProdComponent);



/***/ }),

/***/ "./src/app/admin/products/categories-prod/categories-prod.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/products/categories-prod/categories-prod.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMtcHJvZC9jYXRlZ29yaWVzLXByb2QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/products/categories-prod/categories-prod.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/products/categories-prod/categories-prod.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoriesProdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesProdComponent", function() { return CategoriesProdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_cate_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/cate-product.service */ "./src/app/_services/cate-product.service.ts");





let CategoriesProdComponent = class CategoriesProdComponent {
    constructor(modalService, cateProdService, router, activatedRoute) {
        this.modalService = modalService;
        this.cateProdService = cateProdService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.itemsPerPage = 4;
        this.listSubTrTableCateProd = [];
    }
    openModal(template) {
        this.modalRefAddCateProd = this.modalService.show(template);
    }
    ngOnInit() {
        this.listCateProds = new Array();
        this.pagination = {
            currentPage: 1,
            totalItems: 0,
            totalPages: 0,
            itemsPerPage: this.itemsPerPage
        };
        this.baseDataListCateProds = [];
        this.activatedRoute.data.subscribe(data => {
            this.listCateProds = data.cateProduct.result;
            this.pagination = data.cateProduct.pagination;
        });
    }
    editCateProduct(maDM) {
        this.router.navigate(['/admin/products/categories-prod/' + maDM]);
    }
    deleteCateProduct(maDM) {
        if (confirm('Bạn thực sự muốn xóa danh mục này?')) {
            this.cateProdService.deleteCateProduct(maDM).subscribe(() => {
                this.getListCateProduct();
                alert('Xóa thành công!');
            }, error => {
                console.log(error);
                alert('Xóa thất bại!');
            });
        }
    }
    getListCateProduct() {
        this.cateProdService.getCateProductPage(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListCateProduct(data.result);
        }, error => console.log(error));
    }
    updateListCateProduct(data) {
        this.listCateProds = data;
        this.baseDataListCateProds = [];
        this.listSubTrTableCateProd = [];
        if (data != null) {
            this.listCateProds.forEach(x => {
                this.baseDataListCateProds.push(x);
                this.listSubTrTableCateProd.push(false);
            });
        }
        console.log(this.listCateProds);
    }
    resetFilter() {
        this.searchTerm = '';
    }
    search() {
        if (typeof (this.searchTerm) === 'undefined' || this.searchTerm === null) {
            this.searchTerm = '';
        }
        this.cateProdService.getSearchListCateProduct(this.pagination.currentPage, this.pagination.itemsPerPage, this.searchTerm).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListCateProduct(data.result);
        }, error => console.log(error));
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.search();
    }
};
CategoriesProdComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_services_cate_product_service__WEBPACK_IMPORTED_MODULE_4__["CateProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CategoriesProdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-prod',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-prod.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/categories-prod/categories-prod.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-prod.component.scss */ "./src/app/admin/products/categories-prod/categories-prod.component.scss")).default]
    })
], CategoriesProdComponent);



/***/ }),

/***/ "./src/app/admin/products/manuf-prod/manuf-prod.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/products/manuf-prod/manuf-prod.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3RzL21hbnVmLXByb2QvbWFudWYtcHJvZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/products/manuf-prod/manuf-prod.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/products/manuf-prod/manuf-prod.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManufProdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufProdComponent", function() { return ManufProdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManufProdComponent = class ManufProdComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManufProdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manuf-prod',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manuf-prod.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/manuf-prod/manuf-prod.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manuf-prod.component.scss */ "./src/app/admin/products/manuf-prod/manuf-prod.component.scss")).default]
    })
], ManufProdComponent);



/***/ }),

/***/ "./src/app/admin/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/products/products.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/product.service */ "./src/app/_services/product.service.ts");





let ProductsComponent = class ProductsComponent {
    constructor(modalService, productService, router, activatedRoute) {
        this.modalService = modalService;
        this.productService = productService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.listStatusProd = [
            'Đang kinh doanh',
            'Đã ngừng kinh doanh'
        ];
        this.itemsPerPage = 4;
        this.listSubTrTableProd = [];
    }
    openModal(template) {
        this.modalRefAddProd = this.modalService.show(template);
    }
    ngOnInit() {
        this.fitlerdanhmucsp = 0;
        this.fitlernhasx = 0;
        this.filterStatus = 0;
        this.listProds = new Array();
        this.pagination = {
            currentPage: 1,
            totalItems: 0,
            totalPages: 0,
            itemsPerPage: this.itemsPerPage
        };
        this.resetFilter();
        this.baseDataListProds = [];
        this.activatedRoute.data.subscribe(data => {
            this.listProds = data.product.result;
            this.pagination = data.product.pagination;
        });
        console.log(this.listProds);
    }
    toggleChiTietSanPham(id) {
        this.listSubTrTableProd[id] = !this.listSubTrTableProd[id];
    }
    editProduct(maSP) {
        this.router.navigate(['/admin/products/' + maSP]);
    }
    deleteProduct(maSP) {
        if (confirm('Bạn thực sự muốn xóa sản phẩm này?')) {
            this.productService.deleteProduct(maSP).subscribe(() => {
                this.getListProduct();
                alert('Xóa thành công!');
            }, error => {
                console.log(error);
                alert('Xóa thất bại!');
            });
        }
    }
    getListProduct() {
        this.productService.getProductPage(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListProduct(data.result);
        }, error => console.log(error));
    }
    updateListProduct(data) {
        this.listProds = data;
        this.baseDataListProds = [];
        this.listSubTrTableProd = [];
        if (data != null) {
            this.listProds.forEach(x => {
                this.baseDataListProds.push(x);
                this.listSubTrTableProd.push(false);
            });
        }
        console.log(this.listProds);
    }
    resetFilter() {
        this.searchTerm = '';
    }
    search() {
        if (typeof (this.searchTerm) === 'undefined' || this.searchTerm === null) {
            this.searchTerm = '';
        }
        this.productService.getSearchListProduct(this.pagination.currentPage, this.pagination.itemsPerPage, this.searchTerm).subscribe((data) => {
            if (typeof (data.pagination) !== 'undefined') {
                this.pagination = data.pagination;
            }
            else {
                this.pagination = {
                    currentPage: 1,
                    totalItems: 0,
                    totalPages: 0,
                    itemsPerPage: this.itemsPerPage
                };
            }
            this.updateListProduct(data.result);
        }, error => console.log(error));
    }
    filter() {
        if (this.filterStatus == 2) {
            this.listProds = this.baseDataListProds.filter(this.isNonSale);
        }
        else if (this.filterStatus == 0) {
            this.listProds = this.baseDataListProds;
        }
        else {
            this.listProds = this.baseDataListProds.filter(this.isSale);
        }
    }
    isSale(sanpham) {
        return sanpham.trangthai == 1;
    }
    isNonSale(sanpham) {
        return sanpham.trangthai == 2;
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.search();
    }
};
ProductsComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/admin/products/products.component.scss")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/admin/products/suppliers-prod/suppliers-prod.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/products/suppliers-prod/suppliers-prod.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3RzL3N1cHBsaWVycy1wcm9kL3N1cHBsaWVycy1wcm9kLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/products/suppliers-prod/suppliers-prod.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/products/suppliers-prod/suppliers-prod.component.ts ***!
  \***************************************************************************/
/*! exports provided: SuppliersProdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersProdComponent", function() { return SuppliersProdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SuppliersProdComponent = class SuppliersProdComponent {
    constructor() { }
    ngOnInit() {
    }
};
SuppliersProdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-suppliers-prod',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./suppliers-prod.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/suppliers-prod/suppliers-prod.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./suppliers-prod.component.scss */ "./src/app/admin/products/suppliers-prod/suppliers-prod.component.scss")).default]
    })
], SuppliersProdComponent);



/***/ }),

/***/ "./src/app/admin/profiles/profiles.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/profiles/profiles.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2ZpbGVzL3Byb2ZpbGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/profiles/profiles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/profiles/profiles.component.ts ***!
  \******************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/users.service */ "./src/app/_services/users.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ProfilesComponent = class ProfilesComponent {
    constructor(userService, authService, router) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            manhanvien: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ten: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sdt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            diachi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            gioitinh: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            ngaysinh: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.userUpdate = this.currentUser;
        this.updateValueProfileForm();
    }
    updateValueProfileForm() {
        this.profileForm.controls['manhanvien'].setValue(this.currentUser.manhanvien);
        this.profileForm.controls['ten'].setValue(this.currentUser.ten);
        this.profileForm.controls['sdt'].setValue(this.currentUser.sdt);
        this.profileForm.controls['email'].setValue(this.currentUser.email);
        this.profileForm.controls['diachi'].setValue(this.currentUser.diachi);
        this.profileForm.controls['gioitinh'].setValue(this.currentUser.gioitinh ? 1 : 0);
        const ngsinh = new Date(this.currentUser.ngaysinh);
        this.profileForm.controls['ngaysinh'].setValue(ngsinh);
    }
    updateUser() {
        this.userUpdate.manhanvien = this.currentUser.manhanvien;
        this.userUpdate.ten = this.profileForm.controls['ten'].value;
        this.userUpdate.sdt = this.profileForm.controls['sdt'].value;
        this.userUpdate.email = this.profileForm.controls['email'].value;
        this.userUpdate.diachi = this.profileForm.controls['diachi'].value;
        this.userUpdate.gioitinh = this.profileForm.controls['gioitinh'].value;
        this.userUpdate.ngaysinh = this.profileForm.controls['ngaysinh'].value;
        this.userUpdate.password = this.profileForm.controls['password'].value;
        this.userService.updateUser(this.userUpdate).subscribe(next => {
            this.currentUser = this.userUpdate;
            localStorage.setItem('user', JSON.stringify(this.currentUser));
            alert('Update thành công');
            this.router.navigate(['/admin']);
        }, error => {
            alert('Update Fail');
        }, () => { });
    }
};
ProfilesComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProfilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profiles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profiles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profiles/profiles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profiles.component.scss */ "./src/app/admin/profiles/profiles.component.scss")).default]
    })
], ProfilesComponent);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map