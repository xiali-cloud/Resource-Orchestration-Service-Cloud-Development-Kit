"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBalancers = exports.LoadBalancersProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "LoadBalancersProperty", { enumerable: true, get: function () { return alb_generated_1.RosLoadBalancers; } });
/**
 * A ROS resource type:  `DATASOURCE::ALB::LoadBalancers`
 */
class LoadBalancers extends ros.Resource {
    /**
     * Create a new `DATASOURCE::ALB::LoadBalancers`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosLoadBalancers = new alb_generated_1.RosLoadBalancers(this, id, {
            loadBalancerNames: props.loadBalancerNames,
            loadBalancerBussinessStatus: props.loadBalancerBussinessStatus,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            vpcIds: props.vpcIds,
            loadBalancerIds: props.loadBalancerIds,
            payType: props.payType,
            addressType: props.addressType,
            loadBalancerStatus: props.loadBalancerStatus,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancers;
        this.attrLoadBalancerIds = rosLoadBalancers.attrLoadBalancerIds;
        this.attrLoadBalancers = rosLoadBalancers.attrLoadBalancers;
    }
}
exports.LoadBalancers = LoadBalancers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGJhbGFuY2Vycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWRiYWxhbmNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBMERsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUIzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQTRCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUN6SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLDJCQUEyQjtZQUM5RCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7SUFDaEUsQ0FBQztDQUNKO0FBM0NELHNDQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0xvYWRCYWxhbmNlcnMgfSBmcm9tICcuL2FsYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NMb2FkQmFsYW5jZXJzIGFzIExvYWRCYWxhbmNlcnNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERBVEFTT1VSQ0U6OkFMQjo6TG9hZEJhbGFuY2Vyc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2FkQmFsYW5jZXJzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWRkcmVzc1R5cGU6IFRoZSBhZGRyZXNzIHR5cGUgb2YgdGhlIGxvYWQgYmFsYW5jaW5nIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkZHJlc3NUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9hZEJhbGFuY2VyQnVzc2luZXNzU3RhdHVzOiBTZXJ2aWNlIHN0YXR1cyBvZiBhcHBsaWNhdGlvbiBsb2FkIGJhbGFuY2luZ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlckJ1c3NpbmVzc1N0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvYWRCYWxhbmNlcklkczogSURzIG9mIHRoZSBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlcklkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJOYW1lczogTmFtZXMgb2YgdGhlIGxvYWQgYmFsYW5jaW5nIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlck5hbWVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvYWRCYWxhbmNlclN0YXR1czogVGhlIHN0YXR1cyBvZiBTTEIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VyU3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGF5VHlwZTogTG9hZCBiYWxhbmNpbmcgaW5zdGFuY2UgcGF5bWVudCB0eXBlXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGF5VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWRcbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIG9mIEFsYi5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zTG9hZEJhbGFuY2Vycy5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkczogVlBDIElEc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IElEIG9mIHRoZSByZWFkeS10by11c2Ugem9uZSBvZiB0aGUgbG9hZCBiYWxhbmNpbmcgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6QUxCOjpMb2FkQmFsYW5jZXJzYFxuICovXG5leHBvcnQgY2xhc3MgTG9hZEJhbGFuY2VycyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTG9hZEJhbGFuY2VySWRzOiBUaGUgbGlzdCBvZiBsb2FkIGJhbGFuY2VyIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvYWRCYWxhbmNlcklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExvYWRCYWxhbmNlcnM6IFRoZSBsaXN0IG9mIGxvYWQgYmFsYW5jZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9hZEJhbGFuY2Vyczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpBTEI6OkxvYWRCYWxhbmNlcnNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IExvYWRCYWxhbmNlcnNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0xvYWRCYWxhbmNlcnMgPSBuZXcgUm9zTG9hZEJhbGFuY2Vycyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlck5hbWVzOiBwcm9wcy5sb2FkQmFsYW5jZXJOYW1lcyxcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlckJ1c3NpbmVzc1N0YXR1czogcHJvcHMubG9hZEJhbGFuY2VyQnVzc2luZXNzU3RhdHVzLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHZwY0lkczogcHJvcHMudnBjSWRzLFxuICAgICAgICAgICAgbG9hZEJhbGFuY2VySWRzOiBwcm9wcy5sb2FkQmFsYW5jZXJJZHMsXG4gICAgICAgICAgICBwYXlUeXBlOiBwcm9wcy5wYXlUeXBlLFxuICAgICAgICAgICAgYWRkcmVzc1R5cGU6IHByb3BzLmFkZHJlc3NUeXBlLFxuICAgICAgICAgICAgbG9hZEJhbGFuY2VyU3RhdHVzOiBwcm9wcy5sb2FkQmFsYW5jZXJTdGF0dXMsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0xvYWRCYWxhbmNlcnM7XG4gICAgICAgIHRoaXMuYXR0ckxvYWRCYWxhbmNlcklkcyA9IHJvc0xvYWRCYWxhbmNlcnMuYXR0ckxvYWRCYWxhbmNlcklkcztcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VycyA9IHJvc0xvYWRCYWxhbmNlcnMuYXR0ckxvYWRCYWxhbmNlcnM7XG4gICAgfVxufVxuIl19