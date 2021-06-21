"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = exports.RouteProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "RouteProperty", { enumerable: true, get: function () { return ecs_generated_1.RosRoute; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::Route`
 */
class Route extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ECS::Route`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRoute = new ecs_generated_1.RosRoute(this, id, {
            nextHopType: props.nextHopType === undefined || props.nextHopType === null ? 'Instance' : props.nextHopType,
            routeTableId: props.routeTableId,
            nextHopId: props.nextHopId,
            nextHopList: props.nextHopList,
            destinationCidrBlock: props.destinationCidrBlock,
            routeId: props.routeId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRoute;
    }
}
exports.Route = Route;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBc0NsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBRW5DOzs7T0FHRztJQUVIOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUMzRyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN6QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBQ0o7QUEzQkQsc0JBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUm91dGUgfSBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NSb3V0ZSBhcyBSb3V0ZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQ1M6OlJvdXRlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdGluYXRpb25DaWRyQmxvY2s6IFRoZSBSb3V0ZUVudHJ5J3MgdGFyZ2V0IG5ldHdvcmsgc2VnbWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvbkNpZHJCbG9jazogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm91dGVJZDogUm91dGVJZCBvZiBjcmVhdGVkIHJvdXRlIGVudHJ5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJvdXRlVGFibGVJZDogUm91dGVUYWJsZUlkIG9mIGNyZWF0ZWQgcm91dGUgZW50cnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVUYWJsZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXh0SG9wSWQ6IFRoZSByb3V0ZSBlbnRyeSdzIG5leHQgaG9wLiBXaGVuIHRoZSBOZXh0SG9wTGlzdCBpcyBzcGVjaWZpZWQsIHRoZSB2YWx1ZSB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV4dEhvcElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV4dEhvcExpc3Q6IFRoZSByb3V0ZSBlbnRyeSdzIG5leHQgaG9wIGxpc3QuIElmIHJvdXRlciBpcyB2aXJ0dWFsIGJvcmRlciByb3V0ZXIsIHRoZSB2YWx1ZSB3aWxsIGJlIGlnbm9yZS4gVGhlIGxpc3Qgc2hvdWxkIGNvbnRhaW4gMi00IG5leHQgaG9wLiBOZXh0SG9wSWQgb2YgZWFjaCBuZXh0IGhvcCBtdXN0IGJlIFJvdXRlckludGVyZmFjZSB0aGF0IFZSb3V0ZXIgZm9yd2FyZHMgdG8gVkJSLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5leHRIb3BMaXN0PzogQXJyYXk8Um9zUm91dGUuTmV4dEhvcExpc3RQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXh0SG9wVHlwZTogVGhlIG5leHQgaG9wIHR5cGUuIEF2YWlsYWJsZSB2YWx1ZSBvcHRpb25zOiBJbnN0YW5jZSB8IFR1bm5lbCB8IEhhVmlwIHwgUm91dGVySW50ZXJmYWNlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBJbnN0YW5jZS5XaGVuIHRoZSBOZXh0SG9wTGlzdCBpcyBzcGVjaWZpZWQsIHRoZSB2YWx1ZSB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV4dEhvcFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6Um91dGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNTOjpSb3V0ZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm91dGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NSb3V0ZSA9IG5ldyBSb3NSb3V0ZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG5leHRIb3BUeXBlOiBwcm9wcy5uZXh0SG9wVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLm5leHRIb3BUeXBlID09PSBudWxsID8gJ0luc3RhbmNlJyA6IHByb3BzLm5leHRIb3BUeXBlLFxuICAgICAgICAgICAgcm91dGVUYWJsZUlkOiBwcm9wcy5yb3V0ZVRhYmxlSWQsXG4gICAgICAgICAgICBuZXh0SG9wSWQ6IHByb3BzLm5leHRIb3BJZCxcbiAgICAgICAgICAgIG5leHRIb3BMaXN0OiBwcm9wcy5uZXh0SG9wTGlzdCxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uQ2lkckJsb2NrOiBwcm9wcy5kZXN0aW5hdGlvbkNpZHJCbG9jayxcbiAgICAgICAgICAgIHJvdXRlSWQ6IHByb3BzLnJvdXRlSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUm91dGU7XG4gICAgfVxufVxuIl19