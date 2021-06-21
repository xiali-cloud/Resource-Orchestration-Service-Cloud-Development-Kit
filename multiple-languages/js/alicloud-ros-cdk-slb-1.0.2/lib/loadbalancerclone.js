"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBalancerClone = exports.LoadBalancerCloneProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "LoadBalancerCloneProperty", { enumerable: true, get: function () { return slb_generated_1.RosLoadBalancerClone; } });
/**
 * A ROS resource type:  `ALIYUN::SLB::LoadBalancerClone`
 */
class LoadBalancerClone extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLB::LoadBalancerClone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosLoadBalancerClone = new slb_generated_1.RosLoadBalancerClone(this, id, {
            loadBalancerName: props.loadBalancerName,
            sourceLoadBalancerId: props.sourceLoadBalancerId,
            resourceGroupId: props.resourceGroupId,
            tagsPolicy: props.tagsPolicy === undefined || props.tagsPolicy === null ? 'empty' : props.tagsPolicy,
            vSwitchId: props.vSwitchId,
            backendServers: props.backendServers,
            tags: props.tags,
            backendServersPolicy: props.backendServersPolicy === undefined || props.backendServersPolicy === null ? 'clone' : props.backendServersPolicy,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancerClone;
        this.attrLoadBalancerId = rosLoadBalancerClone.attrLoadBalancerId;
    }
}
exports.LoadBalancerClone = LoadBalancerClone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGJhbGFuY2VyY2xvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FkYmFsYW5jZXJjbG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXVEO0FBRXRCLDBHQUZ4QixvQ0FBb0IsT0FFNkI7QUFpRDFEOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVkvQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTZCLEVBQUUsbUNBQTJDLElBQUk7UUFDeEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLG9CQUFvQixHQUFHLElBQUksb0NBQW9CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3RCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUNwRyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQjtTQUMvSSxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUN0RSxDQUFDO0NBQ0o7QUFuQ0QsOENBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTG9hZEJhbGFuY2VyQ2xvbmUgfSBmcm9tICcuL3NsYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NMb2FkQmFsYW5jZXJDbG9uZSBhcyBMb2FkQmFsYW5jZXJDbG9uZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTEI6OkxvYWRCYWxhbmNlckNsb25lYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIExvYWRCYWxhbmNlckNsb25lUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc291cmNlTG9hZEJhbGFuY2VySWQ6IFNvdXJjZSBsb2FkIGJhbGFuY2VyIGlkIHRvIGNsb25lXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlTG9hZEJhbGFuY2VySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhY2tlbmRTZXJ2ZXJzOiBUaGUgbGlzdCBvZiBFQ1MgaW5zdGFuY2UsIHdoaWNoIHdpbGwgYXR0YWNoZWQgdG8gbG9hZCBiYWxhbmNlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYWNrZW5kU2VydmVycz86IEFycmF5PFJvc0xvYWRCYWxhbmNlckNsb25lLkJhY2tlbmRTZXJ2ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja2VuZFNlcnZlcnNQb2xpY3k6IFNvbHV0aW9uIGZvciBoYW5kbGUgdGhlIGJhY2tlbmQgc2VydmVyIGFuZCB3ZWlnaHRzLiBJZiBzZWxlY3QgJ2Nsb25lJywgaXQgd2lsbCBjbG9uZSBmcm9tIHNvdXJjZSBsb2FkIGJhbGFuY2VyLiBJZiBzZWxlY3QgJ2VtcHR5JyBpdCB3aWxsIG5vdCBhdHRhY2ggYW55IGJhY2tlbmQgc2VydmVycy4gSWYgc2VsZWN0ICdhcHBlbmQnIGl0IHdpbGwgYXBwZW5kIHRoZSBuZXcgYmFja2VuZCBzZXJ2ZXIgbGlzdCB0byBzb3VyY2UgYmFja2VkIHNlcnZlcnMuIElmIHNlbGVjdCAncmVwbGFjZScgaXQgd2lsbCBvbmx5IGF0dGFjaCBuZXcgYmFja2VuZCBzZXJ2ZXIgbGlzdC4gRGVmYXVsdCBpcyAnY2xvbmUnLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJzUG9saWN5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9hZEJhbGFuY2VyTmFtZTogTmFtZSBvZiBjcmVhdGVkIGxvYWQgYmFsYW5jZXIuIExlbmd0aCBpcyBsaW1pdGVkIHRvIDEtODAgY2hhcmFjdGVycywgYWxsb3dlZCB0byBjb250YWluIGxldHRlcnMsIG51bWJlcnMsICctLCAvLCBfLC4nIFdoZW4gbm90IHNwZWNpZmllZCwgYSBkZWZhdWx0IG5hbWUgd2lsbCBiZSBhc3NpZ25lZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2FkQmFsYW5jZXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBzbGIuIE1heCBzdXBwb3J0IDUgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBzbGIuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zTG9hZEJhbGFuY2VyQ2xvbmUuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzUG9saWN5OiBTb2x1dGlvbiBmb3IgaGFuZGxlIHRoZSB0YWdzLiBJZiBzZWxlY3QgJ2Nsb25lJywgaXQgd2lsbCBjbG9uZSBmcm9tIHNvdXJjZSBsb2FkIGJhbGFuY2VyLiBJZiBzZWxlY3QgJ2VtcHR5JyBpdCB3aWxsIG5vdCBjb3BweSB0YWdzLiBJZiBzZWxlY3QgJ2FwcGVuZCcgaXQgd2lsbCBhcHBlbmQgdGhlIG5ldyB0YWdzLiBJZiBzZWxlY3QgJ3JlcGxhY2UnIGl0IHdpbGwgYWRkIG5ldyB0YWdzLlxuICAgICAqIERlZmF1bHQgaXMgJ2VtcHR5Jy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzUG9saWN5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgbmV3IFZTd2l0Y2ggSUQgdG8gY3JlYXRlIGxvYWQgYmFsYW5jZXIgaW5zdGFuY2UuIEZvciBWUEMgbmV0d29yayBvbmx5IGFuZCB0aGUgVlN3aXRjaCBzaG91bGQgYmVsb25nIHRvIHRoZSBWUEMgd2hpY2ggc291cmNlIGxvYWQgYmFsYW5jZXIgaXMgbG9jYXRlZC5XaGVuIG5vdCBzcGVjaWZpZWQsIHNvdXJjZSBsb2FkIGJhbGFuY2VyIFZTd2l0Y2ggSUQgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6U0xCOjpMb2FkQmFsYW5jZXJDbG9uZWBcbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRCYWxhbmNlckNsb25lIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMb2FkQmFsYW5jZXJJZDogVGhlIGlkIG9mIGxvYWQgYmFsYW5jZSBnZW5lcmF0ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvYWRCYWxhbmNlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xCOjpMb2FkQmFsYW5jZXJDbG9uZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTG9hZEJhbGFuY2VyQ2xvbmVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NMb2FkQmFsYW5jZXJDbG9uZSA9IG5ldyBSb3NMb2FkQmFsYW5jZXJDbG9uZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlck5hbWU6IHByb3BzLmxvYWRCYWxhbmNlck5hbWUsXG4gICAgICAgICAgICBzb3VyY2VMb2FkQmFsYW5jZXJJZDogcHJvcHMuc291cmNlTG9hZEJhbGFuY2VySWQsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHRhZ3NQb2xpY3k6IHByb3BzLnRhZ3NQb2xpY3kgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy50YWdzUG9saWN5ID09PSBudWxsID8gJ2VtcHR5JyA6IHByb3BzLnRhZ3NQb2xpY3ksXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHByb3BzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIGJhY2tlbmRTZXJ2ZXJzOiBwcm9wcy5iYWNrZW5kU2VydmVycyxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgICAgICBiYWNrZW5kU2VydmVyc1BvbGljeTogcHJvcHMuYmFja2VuZFNlcnZlcnNQb2xpY3kgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5iYWNrZW5kU2VydmVyc1BvbGljeSA9PT0gbnVsbCA/ICdjbG9uZScgOiBwcm9wcy5iYWNrZW5kU2VydmVyc1BvbGljeSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NMb2FkQmFsYW5jZXJDbG9uZTtcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VySWQgPSByb3NMb2FkQmFsYW5jZXJDbG9uZS5hdHRyTG9hZEJhbGFuY2VySWQ7XG4gICAgfVxufVxuIl19