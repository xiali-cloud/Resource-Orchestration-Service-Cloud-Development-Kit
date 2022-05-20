"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = exports.ListenerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ga_generated_1 = require("./ga.generated");
Object.defineProperty(exports, "ListenerProperty", { enumerable: true, get: function () { return ga_generated_1.RosListener; } });
/**
 * A ROS resource type:  `ALIYUN::GA::Listener`
 */
class Listener extends ros.Resource {
    /**
     * Create a new `ALIYUN::GA::Listener`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosListener = new ga_generated_1.RosListener(this, id, {
            securityPolicyId: props.securityPolicyId,
            description: props.description,
            proxyProtocol: props.proxyProtocol,
            portRanges: props.portRanges,
            certificates: props.certificates,
            xForwardedForConfig: props.xForwardedForConfig,
            protocol: props.protocol,
            acceleratorId: props.acceleratorId,
            name: props.name,
            clientAffinity: props.clientAffinity,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosListener;
        this.attrListenerId = rosListener.attrListenerId;
    }
}
exports.Listener = Listener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaURBQTZDO0FBRXJCLGlHQUZmLDBCQUFXLE9BRW9CO0FBNEV4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWXRDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1NBQ3ZDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUFyQ0QsNEJBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTGlzdGVuZXIgfSBmcm9tICcuL2dhLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0xpc3RlbmVyIGFzIExpc3RlbmVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkdBOjpMaXN0ZW5lcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMaXN0ZW5lclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY2VsZXJhdG9ySWQ6IFRoZSBJRCBvZiB0aGUgR2xvYmFsIEFjY2VsZXJhdG9yIGluc3RhbmNlIHRvIHdoaWNoIHRoZSBsaXN0ZW5lciB3aWxsIGJlIGFkZGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2VsZXJhdG9ySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBvcnRSYW5nZXM6XG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9ydFJhbmdlczogQXJyYXk8Um9zTGlzdGVuZXIuUG9ydFJhbmdlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb3RvY29sOiBUaGUgbmV0d29yayB0cmFuc21pc3Npb24gcHJvdG9jb2wgb2YgdGhlIGxpc3RlbmVyLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdGNwOiBUQ1AgcHJvdG9jb2xcbiAgICAgKiB1ZHA6IFVEUCBwcm90b2NvbFxuICAgICAqIGh0dHA6IEhUVFAgcHJvdG9jb2xodHRwczogSFRUUFMgcHJvdG9jb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvdG9jb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNlcnRpZmljYXRlczpcbiAgICAgKi9cbiAgICByZWFkb25seSBjZXJ0aWZpY2F0ZXM/OiBBcnJheTxSb3NMaXN0ZW5lci5DZXJ0aWZpY2F0ZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbGllbnRBZmZpbml0eTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIGNsaWVudCBhZmZpbml0eSBmb3IgdGhlIGxpc3RlbmVyLlxuICAgICAqIElmIHlvdSBkbyBub3Qgc3BlY2lmeSB0aGUgZGVmYXVsdCB2YWx1ZSBpbiB0aGUgcGFyYW1ldGVyLCBjbGllbnQgYWZmaW5pdHkgaXMgZGlzYWJsZWQuXG4gICAgICogV2hlbiBjbGllbnQgYWZmaW5pdHkgaXMgZGlzYWJsZWQsIHRoZSBjb25uZWN0aW9ucyBmcm9tIGEgc3BlY2lmaWMgc291cmNlIChjbGllbnQpXG4gICAgICogSVAgYWRkcmVzcyBhcmUgbm90IGFsd2F5cyByb3V0ZWQgdG8gdGhlIHNhbWUgZW5kcG9pbnQuXG4gICAgICogSWYgeW91IHNldCB0aGUgdmFsdWUgdG8gU09VUkNFX0lQLCBjbGllbnQgYWZmaW5pdHkgaXMgZW5hYmxlZC4gV2hlbiBjbGllbnQgYWZmaW5pdHkgaXMgZW5hYmxlZCwgdGhlIGNvbm5lY3Rpb25zIGZyb21cbiAgICAgKiBhIHNwZWNpZmljIHNvdXJjZSAoY2xpZW50KSBJUCBhZGRyZXNzIGFyZSBhbHdheXMgcm91dGVkIHRvIHRoZSBzYW1lIGVuZHBvaW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsaWVudEFmZmluaXR5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgbGlzdGVuZXIuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCB1bmRlcnNjb3Jlc1xuICAgICAqIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBjaGFyYWN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb3h5UHJvdG9jb2w6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHByZXNlcnZlIGNsaWVudCBJUCBhZGRyZXNzZXMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBwcmVzZXJ2ZXMgY2xpZW50IElQIGFkZHJlc3Nlcy4gQWZ0ZXIgdGhpcyBmZWF0dXJlIGlzIGVuYWJsZWQsIGJhY2tlbmQgc2VydmVycyBjYW4gcmV0cmlldmUgY2xpZW50IElQIGFkZHJlc3Nlcy5cbiAgICAgKiBmYWxzZSAoZGVmYXVsdCk6IGRvZXMgbm90IHByZXNlcnZlIGNsaWVudCBJUCBhZGRyZXNzZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJveHlQcm90b2NvbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eVBvbGljeUlkOiBUaGUgSUQgb2YgdGhlIHNlY3VyaXR5IHBvbGljeS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHRsc19jaXBoZXJfcG9saWN5XzFfMFxuICAgICAqIHRsc19jaXBoZXJfcG9saWN5XzFfMVxuICAgICAqIHRsc19jaXBoZXJfcG9saWN5XzFfMlxuICAgICAqIHRsc19jaXBoZXJfcG9saWN5XzFfMl9zdHJpY3RcbiAgICAgKiB0bHNfY2lwaGVyX3BvbGljeV8xXzJfc3RyaWN0X3dpdGhfMV8zXG4gICAgICogTm90ZSBPbmx5IEhUVFBTIGxpc3RlbmVycyBzdXBwb3J0IHRoaXMgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5UG9saWN5SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB4Rm9yd2FyZGVkRm9yQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgWEZvcndhcmQgZmllbGQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgeEZvcndhcmRlZEZvckNvbmZpZz86IFJvc0xpc3RlbmVyLlhGb3J3YXJkZWRGb3JDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6R0E6Okxpc3RlbmVyYFxuICovXG5leHBvcnQgY2xhc3MgTGlzdGVuZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExpc3RlbmVySWQ6IFRoZSBJRCBvZiB0aGUgbGlzdGVuZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMaXN0ZW5lcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6R0E6Okxpc3RlbmVyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBMaXN0ZW5lclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0xpc3RlbmVyID0gbmV3IFJvc0xpc3RlbmVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgc2VjdXJpdHlQb2xpY3lJZDogcHJvcHMuc2VjdXJpdHlQb2xpY3lJZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByb3h5UHJvdG9jb2w6IHByb3BzLnByb3h5UHJvdG9jb2wsXG4gICAgICAgICAgICBwb3J0UmFuZ2VzOiBwcm9wcy5wb3J0UmFuZ2VzLFxuICAgICAgICAgICAgY2VydGlmaWNhdGVzOiBwcm9wcy5jZXJ0aWZpY2F0ZXMsXG4gICAgICAgICAgICB4Rm9yd2FyZGVkRm9yQ29uZmlnOiBwcm9wcy54Rm9yd2FyZGVkRm9yQ29uZmlnLFxuICAgICAgICAgICAgcHJvdG9jb2w6IHByb3BzLnByb3RvY29sLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3JJZDogcHJvcHMuYWNjZWxlcmF0b3JJZCxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICBjbGllbnRBZmZpbml0eTogcHJvcHMuY2xpZW50QWZmaW5pdHksXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zTGlzdGVuZXI7XG4gICAgICAgIHRoaXMuYXR0ckxpc3RlbmVySWQgPSByb3NMaXN0ZW5lci5hdHRyTGlzdGVuZXJJZDtcbiAgICB9XG59XG4iXX0=