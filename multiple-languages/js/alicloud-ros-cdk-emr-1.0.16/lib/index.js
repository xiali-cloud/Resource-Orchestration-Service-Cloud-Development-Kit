"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasource = void 0;
__exportStar(require("./cluster"), exports);
__exportStar(require("./cluster2"), exports);
__exportStar(require("./clusterserviceconfigs"), exports);
__exportStar(require("./flowproject"), exports);
// ALIYUN::EMR Resources:
__exportStar(require("./emr.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNENBQTBCO0FBQzFCLDZDQUEyQjtBQUMzQiwwREFBd0M7QUFDeEMsZ0RBQThCO0FBRTlCLHlCQUF5QjtBQUN6QixrREFBZ0M7QUFDaEMsMkNBQTJDO0FBQ2xDLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9jbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2x1c3RlcjInO1xuZXhwb3J0ICogZnJvbSAnLi9jbHVzdGVyc2VydmljZWNvbmZpZ3MnO1xuZXhwb3J0ICogZnJvbSAnLi9mbG93cHJvamVjdCc7XG5cbi8vIEFMSVlVTjo6RU1SIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vZW1yLmdlbmVyYXRlZCc7XG5pbXBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5leHBvcnQgeyBkYXRhc291cmNlIH07XG4iXX0=