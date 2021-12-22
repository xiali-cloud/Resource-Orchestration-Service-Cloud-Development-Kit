"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterInterface = exports.RouterInterfaceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "RouterInterfaceProperty", { enumerable: true, get: function () { return vpc_generated_1.RosRouterInterface; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::RouterInterface`
 */
class RouterInterface extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::RouterInterface`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRouterInterface = new vpc_generated_1.RosRouterInterface(this, id, {
            oppositeInterfaceId: props.oppositeInterfaceId,
            oppositeInterfaceOwnerId: props.oppositeInterfaceOwnerId,
            description: props.description,
            oppositeRouterId: props.oppositeRouterId,
            oppositeRegionId: props.oppositeRegionId,
            pricingCycle: props.pricingCycle,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            healthCheckSourceIp: props.healthCheckSourceIp,
            period: props.period,
            routerId: props.routerId,
            autoPay: props.autoPay,
            name: props.name,
            role: props.role,
            oppositeRouterType: props.oppositeRouterType === undefined || props.oppositeRouterType === null ? 'VRouter' : props.oppositeRouterType,
            routerType: props.routerType === undefined || props.routerType === null ? 'VRouter' : props.routerType,
            accessPointId: props.accessPointId,
            oppositeAccessPointId: props.oppositeAccessPointId,
            spec: props.spec,
            healthCheckTargetIp: props.healthCheckTargetIp,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouterInterface;
        this.attrRouterInterfaceId = rosRouterInterface.attrRouterInterfaceId;
    }
}
exports.RouterInterface = RouterInterface;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQXlHdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZN0M7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEyQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3RILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtDQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5Qyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1lBQ3hELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGtCQUFrQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCO1lBQ3ZJLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQjtZQUN0SSxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFDdEcsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7WUFDbEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7U0FDakQsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUM7SUFDMUUsQ0FBQztDQUNKO0FBOUNELDBDQThDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1JvdXRlckludGVyZmFjZSB9IGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1JvdXRlckludGVyZmFjZSBhcyBSb3V0ZXJJbnRlcmZhY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpSb3V0ZXJJbnRlcmZhY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVySW50ZXJmYWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm9sZTogUm91dGVySW50ZXJmYWNlIHJvbGUuIE5vdyBzdXBwb3J0ICdJbml0aWF0aW5nU2lkZXxBY2NlcHRpbmdTaWRlJy4gSWYgJ1JvdXRlclR5cGUnIGlzIHNwZWNpZmllZCBhcyAnVkJSJywgdGhlIHZhbHVlIG11c3QgYmUgJ0luaXRpYXRpbmdTaWRlJy5JZiAnT3Bwb3NpdGVSb3V0ZXJUeXBlJyBpcyBzcGVjaWZpZWQgYXMgJ1ZCUicsIHRoZSB2YWx1ZSBtdXN0IGJlICdBY2NlcHRpbmdTaWRlJy5cbiAgICAgKi9cbiAgICByZWFkb25seSByb2xlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb3V0ZXJJZDogVGhlIHJvdXRlciBJRCB0byBjcmVhdGUgUm91dGVySW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2Nlc3NQb2ludElkOiBBY2Nlc3MgcG9pbnQgSUQuIElmICdSb3V0ZXJUeXBlJyBpcyBzcGVjaWZpZWQgYXMgJ1ZCUicsIHRoZSB2YWx1ZSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2Nlc3NQb2ludElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1BheTogSW5kaWNhdGVzIHdoZXRoZXIgYXV0b21hdGljIHBheW1lbnQgaXMgZW5hYmxlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGZhbHNlOiBBdXRvbWF0aWMgcGF5bWVudCBpcyBkaXNhYmxlZC4gWW91IG5lZWQgdG8gZ28gdG8gT3JkZXJzIHRvIG1ha2UgdGhlIHBheW1lbnQgb25jZSBhbiBvcmRlciBpcyBnZW5lcmF0ZWQuIFxuICAgICAqIHRydWU6IEF1dG9tYXRpYyBwYXltZW50IGlzIGVuYWJsZWQuIFRoZSBwYXltZW50IGlzIGF1dG9tYXRpY2FsbHkgbWFkZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUGF5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBDdXN0b20gZGVzY3JpcHRpb24gb2YgdGhlIFJvdXRlckludGVyZmFjZSwgWzIsIDI1Nl0gY2hhcmFjdGVycy4gRG9uJ3QgZmlsbCBvciBlbXB0eSwgdGhlIGRlZmF1bHQgaXMgZW1wdHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoZWFsdGhDaGVja1NvdXJjZUlwOiBTb3VyY2UgSVAgYWRkcmVzcyBvZiB0aGUgcGFja2V0IGZvciBsZWFzZWQgbGluZSBIZWFsdGhDaGVjayBpbiBsZWFzZWQgbGluZSBkaXNhc3RlciB0b2xlcmFuY2UgYW5kIEVDTVAgc2NlbmFyaW9zLiBJdCBpcyB2YWxpZCBvbmx5IGZvciBhIFZSb3V0ZXIgUm91dGVySW50ZXJmYWNlIHdpdGggYSBwZWVyIG9uIGEgVkJSLiBUaGUgc291cmNlIElQIGFkZHJlc3MgbXVzdCBiZSBpbiB0aGUgVlBDIG9mIHRoZSBsb2NhbCBWUm91dGVyIGFuZCBpcyBub3QgdXNlZC4gSGVhbHRoQ2hlY2tTb3VyY2VJcCBhbmQgSGVhbHRoQ2hlY2tUYXJnZXRJcCBwYXJhbWV0ZXJzIG11c3QgYmUgYm90aCBzcGVjaWZpZWQgb3IgbGVmdCB1bnNwZWNpZmllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBoZWFsdGhDaGVja1NvdXJjZUlwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaGVhbHRoQ2hlY2tUYXJnZXRJcDogVGFyZ2V0IElQIGFkZHJlc3Mgb2YgdGhlIHBhY2tldCBmb3IgbGVhc2VkIGxpbmUgSGVhbHRoQ2hlY2sgaW4gbGVhc2VkIGxpbmUgZGlzYXN0ZXIgdG9sZXJhbmNlIGFuZCBFQ01QIHNjZW5hcmlvcy4gSXQgaXMgdmFsaWQgb25seSBmb3IgYSBWUm91dGVyIFJvdXRlckludGVyZmFjZSB3aXRoIGEgcGVlciBvbiBhIFZCUi4gVXN1YWxseSB5b3UgY2FuIHVzZSB0aGUgQ1BFIElQIGFkZHJlc3Mgb2YgdGhlIGxlYXNlZCBsaW5lIHVzZXIncyBjbGllbnQgKHRoYXQgaXMsIHRoZSBQZWVyR2F0ZXdheUlQIG9uIHRoZSBWQlIgb2YgdGhlIHBlZXIgUm91dGVySW50ZXJmYWNlKSwgeW91IGNhbiBhbHNvIHNwZWNpZnkgYW5vdGhlciBJUCBhZGRyZXNzIG9mIHRoZSBsZWFzZWQgbGluZSB1c2VyJ3MgY2xpZW50IGFzIHRoZSBIZWFsdGhDaGVjayB0YXJnZXQgSVAgYWRkcmVzcy4gSGVhbHRoQ2hlY2tTb3VyY2VJcCBhbmQgSGVhbHRoQ2hlY2tUYXJnZXRJcCBwYXJhbWV0ZXJzIG11c3QgYmUgYm90aCBzcGVjaWZpZWQgb3IgbGVmdCB1bnNwZWNpZmllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBoZWFsdGhDaGVja1RhcmdldElwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIHJvdXRlciBpbnRlcmZhY2UuIFZhbGlkIHZhbHVlczogUHJlUGFpZCAoU3Vic2NyaXB0aW9uKSwgUG9zdFBhaWQgKGRlZmF1bHQsIFBheS1Bcy1Zb3UtR28pXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogQ3VzdG9tIG5hbWUgb2YgdGhlIFJvdXRlckludGVyZmFjZSwgWzIsIDEyOF0gRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMsIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlIGluIHNpemUsIGNhbiBjb250YWluIG51bWJlcnMsICdfJyBvciAnLicsICctJ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBvcHBvc2l0ZUFjY2Vzc1BvaW50SWQ6IEFjY2VzcyBwb2ludCBJRCBvZiB0aGUgY29ubmVjdGlvbiBwZWVyIFJvdXRlckludGVyZmFjZS4gSWYgJ09wcG9zaXRlUm91dGVyVHlwZScgaXMgc3BlY2lmaWVkIGFzICdWQlInLCB0aGUgdmFsdWUgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3Bwb3NpdGVBY2Nlc3NQb2ludElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3Bwb3NpdGVJbnRlcmZhY2VJZDogVGhlIElEIG9mIHRoZSBwZWVyIHJvdXRlciBpbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3Bwb3NpdGVJbnRlcmZhY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG9wcG9zaXRlSW50ZXJmYWNlT3duZXJJZDogT3duZXIgYWNjb3VudCBJRCBvZiB0aGUgY29ubmVjdGlvbiBwZWVyIFJvdXRlckludGVyZmFjZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgY3VycmVudCB1c2VyIElkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9wcG9zaXRlSW50ZXJmYWNlT3duZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG9wcG9zaXRlUmVnaW9uSWQ6IFRoZSByZWdpb24gd2hlcmUgdGhlIGNvbm5lY3Rpb24gcGVlciBSb3V0ZXJJbnRlcmZhY2UgbG9jYXRlcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgcmVnaW9uIHdoZXJlIHN0YWNrIGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3Bwb3NpdGVSZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG9wcG9zaXRlUm91dGVySWQ6IFRoZSByb3V0ZXIgSUQgb2YgdGhlIGNvbm5lY3Rpb24gcGVlciBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3Bwb3NpdGVSb3V0ZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG9wcG9zaXRlUm91dGVyVHlwZTogUm91dGVyIHR5cGUgb2YgdGhlIGNvbm5lY3Rpb24gcGVlciByb3V0ZXIuIE5vdyBzdXBwb3J0ICdWUm91dGVyfFZCUicuIElmICdSb3V0ZXJUeXBlJyBpcyBzcGVjaWZpZWQgYXMgJ1ZCUicsIHRoZSB2YWx1ZSBtdXN0IGJlICdWUm91dGVyJy5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHBvc2l0ZVJvdXRlclR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFByZXBhaWQgdGltZSBwZXJpb2QuIEl0IGNvdWxkIGJlIGZyb20gMSB0byA5IHdoZW4gUHJpY2luZ0N5Y2xlIGlzIE1vbnRoLCBvciAxIHRvIDMgd2hlbiBQcmljaW5nQ3ljbGUgaXMgWWVhci4gRGVmYXVsdCB2YWx1ZSBpcyAzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByaWNpbmdDeWNsZTogVW5pdCBvZiB0aGUgcGF5bWVudCBjeWNsZS4gSXQgY291bGQgYmUgTW9udGggKGRlZmF1bHQpIG9yIFllYXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpY2luZ0N5Y2xlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm91dGVyVHlwZTogUm91dGVyIHR5cGUuIE5vdyBzdXBwb3J0ICdWUm91dGVyfFZCUidcbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZXJUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BlYzogUm91dGVySW50ZXJmYWNlIHNwZWNpZmljYXRpb24uIElmICdSb2xlJyBpcyBzcGVjaWZpZWQgYXMgJ0luaXRpYXRpbmdTaWRlJywgdGhlIHZhbHVlIGlzIHJlcXVpcmVkLiBJZiAnUm9sZScgaXMgc3BlY2lmaWVkIGFzICdBY2NlcHRpbmdTaWRlJywgdGhlIHZhbHVlIGlzIHNldCBhcyAnTmVnYXRpdmUnIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BlYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpSb3V0ZXJJbnRlcmZhY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZXJJbnRlcmZhY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvdXRlckludGVyZmFjZUlkOiBUaGUgSUQgb2YgY3JlYXRlZCBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZXJJbnRlcmZhY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6Um91dGVySW50ZXJmYWNlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3V0ZXJJbnRlcmZhY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NSb3V0ZXJJbnRlcmZhY2UgPSBuZXcgUm9zUm91dGVySW50ZXJmYWNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgb3Bwb3NpdGVJbnRlcmZhY2VJZDogcHJvcHMub3Bwb3NpdGVJbnRlcmZhY2VJZCxcbiAgICAgICAgICAgIG9wcG9zaXRlSW50ZXJmYWNlT3duZXJJZDogcHJvcHMub3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3Bwb3NpdGVSb3V0ZXJJZDogcHJvcHMub3Bwb3NpdGVSb3V0ZXJJZCxcbiAgICAgICAgICAgIG9wcG9zaXRlUmVnaW9uSWQ6IHByb3BzLm9wcG9zaXRlUmVnaW9uSWQsXG4gICAgICAgICAgICBwcmljaW5nQ3ljbGU6IHByb3BzLnByaWNpbmdDeWNsZSxcbiAgICAgICAgICAgIGluc3RhbmNlQ2hhcmdlVHlwZTogcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlID09PSB1bmRlZmluZWQgfHwgcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlID09PSBudWxsID8gJ1Bvc3RQYWlkJyA6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSxcbiAgICAgICAgICAgIGhlYWx0aENoZWNrU291cmNlSXA6IHByb3BzLmhlYWx0aENoZWNrU291cmNlSXAsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIHJvdXRlcklkOiBwcm9wcy5yb3V0ZXJJZCxcbiAgICAgICAgICAgIGF1dG9QYXk6IHByb3BzLmF1dG9QYXksXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICAgICAgcm9sZTogcHJvcHMucm9sZSxcbiAgICAgICAgICAgIG9wcG9zaXRlUm91dGVyVHlwZTogcHJvcHMub3Bwb3NpdGVSb3V0ZXJUeXBlID09PSB1bmRlZmluZWQgfHwgcHJvcHMub3Bwb3NpdGVSb3V0ZXJUeXBlID09PSBudWxsID8gJ1ZSb3V0ZXInIDogcHJvcHMub3Bwb3NpdGVSb3V0ZXJUeXBlLFxuICAgICAgICAgICAgcm91dGVyVHlwZTogcHJvcHMucm91dGVyVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnJvdXRlclR5cGUgPT09IG51bGwgPyAnVlJvdXRlcicgOiBwcm9wcy5yb3V0ZXJUeXBlLFxuICAgICAgICAgICAgYWNjZXNzUG9pbnRJZDogcHJvcHMuYWNjZXNzUG9pbnRJZCxcbiAgICAgICAgICAgIG9wcG9zaXRlQWNjZXNzUG9pbnRJZDogcHJvcHMub3Bwb3NpdGVBY2Nlc3NQb2ludElkLFxuICAgICAgICAgICAgc3BlYzogcHJvcHMuc3BlYyxcbiAgICAgICAgICAgIGhlYWx0aENoZWNrVGFyZ2V0SXA6IHByb3BzLmhlYWx0aENoZWNrVGFyZ2V0SXAsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUm91dGVySW50ZXJmYWNlO1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZXJJbnRlcmZhY2VJZCA9IHJvc1JvdXRlckludGVyZmFjZS5hdHRyUm91dGVySW50ZXJmYWNlSWQ7XG4gICAgfVxufVxuIl19