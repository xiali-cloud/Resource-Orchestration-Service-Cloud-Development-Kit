"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessRule = exports.AccessRuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nas_generated_1 = require("./nas.generated");
Object.defineProperty(exports, "AccessRuleProperty", { enumerable: true, get: function () { return nas_generated_1.RosAccessRule; } });
/**
 * A ROS resource type:  `ALIYUN::NAS::AccessRule`
 */
class AccessRule extends ros.Resource {
    /**
     * Create a new `ALIYUN::NAS::AccessRule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAccessRule = new nas_generated_1.RosAccessRule(this, id, {
            userAccessType: props.userAccessType === undefined || props.userAccessType === null ? 'no_squash' : props.userAccessType,
            priority: props.priority === undefined || props.priority === null ? 1 : props.priority,
            accessGroupName: props.accessGroupName,
            sourceCidrIp: props.sourceCidrIp,
            rwAccessType: props.rwAccessType === undefined || props.rwAccessType === null ? 'RDWR' : props.rwAccessType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessRule;
        this.attrAccessRuleId = rosAccessRule.attrAccessRuleId;
    }
}
exports.AccessRule = AccessRule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY2Vzc3J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFpQzVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZeEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjO1lBQ3hILFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUN0RixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtTQUM5RyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQzNELENBQUM7Q0FDSjtBQWhDRCxnQ0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBY2Nlc3NSdWxlIH0gZnJvbSAnLi9uYXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQWNjZXNzUnVsZSBhcyBBY2Nlc3NSdWxlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok5BUzo6QWNjZXNzUnVsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY2Nlc3NSdWxlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjZXNzR3JvdXBOYW1lOiBQZXJtaXNzaW9uIGdyb3VwIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBhY2Nlc3NHcm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZUNpZHJJcDogQWRkcmVzcyBvciBhZGRyZXNzIHNlZ21lbnRcbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VDaWRySXA6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByaW9yaXR5OiBQcmlvcml0eSBsZXZlbC4gUmFuZ2U6IDEtMTAwLiBEZWZhdWx0IHZhbHVlOiAxXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpb3JpdHk/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByd0FjY2Vzc1R5cGU6IFJlYWQtd3JpdGUgcGVybWlzc2lvbiB0eXBlOiBSRFdSIChkZWZhdWx0KSwgUkRPTkxZXG4gICAgICovXG4gICAgcmVhZG9ubHkgcndBY2Nlc3NUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlckFjY2Vzc1R5cGU6IFVzZXIgcGVybWlzc2lvbiB0eXBlOiBub19zcXVhc2ggKGRlZmF1bHQpLCByb290X3NxdWFzaCwgYWxsX3NxdWFzaFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJBY2Nlc3NUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpOQVM6OkFjY2Vzc1J1bGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NSdWxlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBY2Nlc3NSdWxlSWQ6IFJ1bGUgc2VyaWFsIG51bWJlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjZXNzUnVsZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TkFTOjpBY2Nlc3NSdWxlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBY2Nlc3NSdWxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQWNjZXNzUnVsZSA9IG5ldyBSb3NBY2Nlc3NSdWxlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdXNlckFjY2Vzc1R5cGU6IHByb3BzLnVzZXJBY2Nlc3NUeXBlID09PSB1bmRlZmluZWQgfHwgcHJvcHMudXNlckFjY2Vzc1R5cGUgPT09IG51bGwgPyAnbm9fc3F1YXNoJyA6IHByb3BzLnVzZXJBY2Nlc3NUeXBlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHByb3BzLnByaW9yaXR5ID09PSB1bmRlZmluZWQgfHwgcHJvcHMucHJpb3JpdHkgPT09IG51bGwgPyAxIDogcHJvcHMucHJpb3JpdHksXG4gICAgICAgICAgICBhY2Nlc3NHcm91cE5hbWU6IHByb3BzLmFjY2Vzc0dyb3VwTmFtZSxcbiAgICAgICAgICAgIHNvdXJjZUNpZHJJcDogcHJvcHMuc291cmNlQ2lkcklwLFxuICAgICAgICAgICAgcndBY2Nlc3NUeXBlOiBwcm9wcy5yd0FjY2Vzc1R5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5yd0FjY2Vzc1R5cGUgPT09IG51bGwgPyAnUkRXUicgOiBwcm9wcy5yd0FjY2Vzc1R5cGUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWNjZXNzUnVsZTtcbiAgICAgICAgdGhpcy5hdHRyQWNjZXNzUnVsZUlkID0gcm9zQWNjZXNzUnVsZS5hdHRyQWNjZXNzUnVsZUlkO1xuICAgIH1cbn1cbiJdfQ==