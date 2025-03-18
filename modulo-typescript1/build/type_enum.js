"use strict";
var DesingColors;
(function (DesingColors) {
    DesingColors["white"] = "#FFF";
    DesingColors["black"] = "#000";
})(DesingColors || (DesingColors = {}));
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 1] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 3] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 4] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.ADMIN);
console.log(StatusPermission.USER);
console.log(StatusPermission.SUPPORT);
