"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcEndpointService = exports.VpcEndpointServiceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const privatelink_generated_1 = require("./privatelink.generated");
Object.defineProperty(exports, "VpcEndpointServiceProperty", { enumerable: true, get: function () { return privatelink_generated_1.RosVpcEndpointService; } });
/**
 * A ROS resource type:  `ALIYUN::PrivateLink::VpcEndpointService`
 */
class VpcEndpointService extends ros.Resource {
    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpointService`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosVpcEndpointService = new privatelink_generated_1.RosVpcEndpointService(this, id, {
            user: props.user,
            serviceDescription: props.serviceDescription,
            resource: props.resource,
            connectBandwidth: props.connectBandwidth,
            autoAcceptEnabled: props.autoAcceptEnabled,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcEndpointService;
        this.attrMaxBandwidth = rosVpcEndpointService.attrMaxBandwidth;
        this.attrMinBandwidth = rosVpcEndpointService.attrMinBandwidth;
        this.attrServiceDescription = rosVpcEndpointService.attrServiceDescription;
        this.attrServiceDomain = rosVpcEndpointService.attrServiceDomain;
        this.attrServiceId = rosVpcEndpointService.attrServiceId;
        this.attrServiceName = rosVpcEndpointService.attrServiceName;
    }
}
exports.VpcEndpointService = VpcEndpointService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjZW5kcG9pbnRzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidnBjZW5kcG9pbnRzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtRUFBZ0U7QUFFOUIsMkdBRnpCLDZDQUFxQixPQUU4QjtBQW1DNUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBcUNoRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQWlDLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUM5SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSw2Q0FBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9ELElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7U0FDN0MsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcscUJBQXFCLENBQUMsZ0JBQWdCLENBQUM7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO1FBQy9ELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQztRQUMzRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcscUJBQXFCLENBQUMsaUJBQWlCLENBQUM7UUFDakUsSUFBSSxDQUFDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7UUFDekQsSUFBSSxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQyxlQUFlLENBQUM7SUFDakUsQ0FBQztDQUNKO0FBOURELGdEQThEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1ZwY0VuZHBvaW50U2VydmljZSB9IGZyb20gJy4vcHJpdmF0ZWxpbmsuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zVnBjRW5kcG9pbnRTZXJ2aWNlIGFzIFZwY0VuZHBvaW50U2VydmljZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpQcml2YXRlTGluazo6VnBjRW5kcG9pbnRTZXJ2aWNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZwY0VuZHBvaW50U2VydmljZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9BY2NlcHRFbmFibGVkOiBTcGVjaWZpZXMgd2hldGhlciB0byBhdXRvbWF0aWNhbGx5IGFjY2VwdCBlbmRwb2ludCBjb25uZWN0aW9uIHJlcXVlc3RzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogYXV0b21hdGljYWxseSBhY2NlcHRzIGVuZHBvaW50IGNvbm5lY3Rpb24gcmVxdWVzdHMuXG4gICAgICogZmFsc2U6IGRvZXMgbm90IGF1dG9tYXRpY2FsbHkgYWNjZXB0IGVuZHBvaW50IGNvbm5lY3Rpb24gcmVxdWVzdHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b0FjY2VwdEVuYWJsZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29ubmVjdEJhbmR3aWR0aDogVGhlIGRlZmF1bHQgbWF4aW11bSBiYW5kd2lkdGggb2YgdGhlIGVuZHBvaW50IGNvbm5lY3Rpb24uIFZhbGlkIHZhbHVlczogMTAwIHRvIDEwMjQuIFVuaXQ6IE1iaXQvcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb25uZWN0QmFuZHdpZHRoPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2U6XG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2U/OiBBcnJheTxSb3NWcGNFbmRwb2ludFNlcnZpY2UuUmVzb3VyY2VQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2aWNlRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBmb3IgdGhlIGVuZHBvaW50IHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZURlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlcjogQWNjb3VudCBJRHMgdG8gdGhlIHdoaXRlbGlzdCBvZiBhbiBlbmRwb2ludCBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXI/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpQcml2YXRlTGluazo6VnBjRW5kcG9pbnRTZXJ2aWNlYFxuICovXG5leHBvcnQgY2xhc3MgVnBjRW5kcG9pbnRTZXJ2aWNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNYXhCYW5kd2lkdGg6IFRoZSBtYXhpbXVtIGJhbmR3aWR0aCBvZiB0aGUgZW5kcG9pbnQgY29ubmVjdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1heEJhbmR3aWR0aDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1pbkJhbmR3aWR0aDogVGhlIG1pbmltdW0gYmFuZHdpZHRoIG9mIHRoZSBlbmRwb2ludCBjb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWluQmFuZHdpZHRoOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZURlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGVuZHBvaW50IHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlRGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZXJ2aWNlRG9tYWluOiBUaGUgZG9tYWluIG5hbWUgb2YgdGhlIGVuZHBvaW50IHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlRG9tYWluOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZUlkOiBUaGUgSUQgb2YgdGhlIGVuZHBvaW50IHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZXJ2aWNlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGVuZHBvaW50IHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlByaXZhdGVMaW5rOjpWcGNFbmRwb2ludFNlcnZpY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFZwY0VuZHBvaW50U2VydmljZVByb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zVnBjRW5kcG9pbnRTZXJ2aWNlID0gbmV3IFJvc1ZwY0VuZHBvaW50U2VydmljZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHVzZXI6IHByb3BzLnVzZXIsXG4gICAgICAgICAgICBzZXJ2aWNlRGVzY3JpcHRpb246IHByb3BzLnNlcnZpY2VEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlc291cmNlOiBwcm9wcy5yZXNvdXJjZSxcbiAgICAgICAgICAgIGNvbm5lY3RCYW5kd2lkdGg6IHByb3BzLmNvbm5lY3RCYW5kd2lkdGgsXG4gICAgICAgICAgICBhdXRvQWNjZXB0RW5hYmxlZDogcHJvcHMuYXV0b0FjY2VwdEVuYWJsZWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVnBjRW5kcG9pbnRTZXJ2aWNlO1xuICAgICAgICB0aGlzLmF0dHJNYXhCYW5kd2lkdGggPSByb3NWcGNFbmRwb2ludFNlcnZpY2UuYXR0ck1heEJhbmR3aWR0aDtcbiAgICAgICAgdGhpcy5hdHRyTWluQmFuZHdpZHRoID0gcm9zVnBjRW5kcG9pbnRTZXJ2aWNlLmF0dHJNaW5CYW5kd2lkdGg7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VEZXNjcmlwdGlvbiA9IHJvc1ZwY0VuZHBvaW50U2VydmljZS5hdHRyU2VydmljZURlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlRG9tYWluID0gcm9zVnBjRW5kcG9pbnRTZXJ2aWNlLmF0dHJTZXJ2aWNlRG9tYWluO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlSWQgPSByb3NWcGNFbmRwb2ludFNlcnZpY2UuYXR0clNlcnZpY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZU5hbWUgPSByb3NWcGNFbmRwb2ludFNlcnZpY2UuYXR0clNlcnZpY2VOYW1lO1xuICAgIH1cbn1cbiJdfQ==