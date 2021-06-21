"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitRouter = exports.TransitRouterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cen_generated_1 = require("./cen.generated");
Object.defineProperty(exports, "TransitRouterProperty", { enumerable: true, get: function () { return cen_generated_1.RosTransitRouter; } });
/**
 * A ROS resource type:  `ALIYUN::CEN::TransitRouter`
 */
class TransitRouter extends ros.Resource {
    /**
     * Create a new `ALIYUN::CEN::TransitRouter`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosTransitRouter = new cen_generated_1.RosTransitRouter(this, id, {
            cenId: props.cenId,
            transitRouterDescription: props.transitRouterDescription,
            transitRouterName: props.transitRouterName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouter;
        this.attrAliUid = rosTransitRouter.attrAliUid;
        this.attrCenId = rosTransitRouter.attrCenId;
        this.attrTransitRouterDescription = rosTransitRouter.attrTransitRouterDescription;
        this.attrTransitRouterId = rosTransitRouter.attrTransitRouterId;
        this.attrTransitRouterName = rosTransitRouter.attrTransitRouterName;
        this.attrType = rosTransitRouter.attrType;
    }
}
exports.TransitRouter = TransitRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdHJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zaXRyb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBdUJsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBcUMzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QjtZQUN4RCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1NBQzdDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDO1FBQ2xGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7UUFDcEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBNURELHNDQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1RyYW5zaXRSb3V0ZXIgfSBmcm9tICcuL2Nlbi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NUcmFuc2l0Um91dGVyIGFzIFRyYW5zaXRSb3V0ZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q0VOOjpUcmFuc2l0Um91dGVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRSb3V0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjZW5JZDogQ2VuSWRcbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHJhbnNpdFJvdXRlckRlc2NyaXB0aW9uOiBUcmFuc2l0Um91dGVyRGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVyRGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyTmFtZTogVHJhbnNpdFJvdXRlck5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVyTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q0VOOjpUcmFuc2l0Um91dGVyYFxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNpdFJvdXRlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWxpVWlkOiBBbGlVaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsaVVpZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENlbklkOiBDZW5JZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VuSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUcmFuc2l0Um91dGVyRGVzY3JpcHRpb246IFRyYW5zaXRSb3V0ZXJEZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNpdFJvdXRlckRlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVHJhbnNpdFJvdXRlcklkOiBUcmFuc2l0Um91dGVySWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYW5zaXRSb3V0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRyYW5zaXRSb3V0ZXJOYW1lOiBUcmFuc2l0Um91dGVyTmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNpdFJvdXRlck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUeXBlOiBUeXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q0VOOjpUcmFuc2l0Um91dGVyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBUcmFuc2l0Um91dGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zVHJhbnNpdFJvdXRlciA9IG5ldyBSb3NUcmFuc2l0Um91dGVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY2VuSWQ6IHByb3BzLmNlbklkLFxuICAgICAgICAgICAgdHJhbnNpdFJvdXRlckRlc2NyaXB0aW9uOiBwcm9wcy50cmFuc2l0Um91dGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0cmFuc2l0Um91dGVyTmFtZTogcHJvcHMudHJhbnNpdFJvdXRlck5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVHJhbnNpdFJvdXRlcjtcbiAgICAgICAgdGhpcy5hdHRyQWxpVWlkID0gcm9zVHJhbnNpdFJvdXRlci5hdHRyQWxpVWlkO1xuICAgICAgICB0aGlzLmF0dHJDZW5JZCA9IHJvc1RyYW5zaXRSb3V0ZXIuYXR0ckNlbklkO1xuICAgICAgICB0aGlzLmF0dHJUcmFuc2l0Um91dGVyRGVzY3JpcHRpb24gPSByb3NUcmFuc2l0Um91dGVyLmF0dHJUcmFuc2l0Um91dGVyRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJJZCA9IHJvc1RyYW5zaXRSb3V0ZXIuYXR0clRyYW5zaXRSb3V0ZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyVHJhbnNpdFJvdXRlck5hbWUgPSByb3NUcmFuc2l0Um91dGVyLmF0dHJUcmFuc2l0Um91dGVyTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyVHlwZSA9IHJvc1RyYW5zaXRSb3V0ZXIuYXR0clR5cGU7XG4gICAgfVxufVxuIl19