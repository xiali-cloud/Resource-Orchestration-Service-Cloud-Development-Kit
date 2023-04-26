"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBalancer = exports.LoadBalancerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "LoadBalancerProperty", { enumerable: true, get: function () { return alb_generated_1.RosLoadBalancer; } });
/**
 * A ROS resource type:  `ALIYUN::ALB::LoadBalancer`
 */
class LoadBalancer extends ros.Resource {
    /**
     * Create a new `ALIYUN::ALB::LoadBalancer`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosLoadBalancer = new alb_generated_1.RosLoadBalancer(this, id, {
            addressIpVersion: props.addressIpVersion,
            loadBalancerEdition: props.loadBalancerEdition,
            resourceGroupId: props.resourceGroupId,
            loadBalancerBillingConfig: props.loadBalancerBillingConfig,
            zoneMappings: props.zoneMappings,
            modificationProtectionConfig: props.modificationProtectionConfig,
            loadBalancerName: props.loadBalancerName,
            accessLogConfig: props.accessLogConfig,
            vpcId: props.vpcId,
            bandwidthPackageId: props.bandwidthPackageId,
            addressType: props.addressType,
            addressAllocatedMode: props.addressAllocatedMode,
            deletionProtectionEnabled: props.deletionProtectionEnabled,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancer;
        this.attrAddressType = rosLoadBalancer.attrAddressType;
        this.attrDnsName = rosLoadBalancer.attrDnsName;
        this.attrLoadBalancerEdition = rosLoadBalancer.attrLoadBalancerEdition;
        this.attrLoadBalancerId = rosLoadBalancer.attrLoadBalancerId;
        this.attrVpcId = rosLoadBalancer.attrVpcId;
        this.attrZoneMappings = rosLoadBalancer.attrZoneMappings;
    }
}
exports.LoadBalancer = LoadBalancer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGJhbGFuY2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9hZGJhbGFuY2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBd0ZoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBcUMxQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXdCLEVBQUUsbUNBQTJDLElBQUk7UUFDbkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGVBQWUsR0FBRyxJQUFJLCtCQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyx5QkFBeUI7WUFDMUQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLDRCQUE0QixFQUFFLEtBQUssQ0FBQyw0QkFBNEI7WUFDaEUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQseUJBQXlCLEVBQUUsS0FBSyxDQUFDLHlCQUF5QjtZQUMxRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsZUFBZSxDQUFDLHVCQUF1QixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUM7UUFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFDN0QsQ0FBQztDQUNKO0FBdkVELG9DQXVFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0xvYWRCYWxhbmNlciB9IGZyb20gJy4vYWxiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0xvYWRCYWxhbmNlciBhcyBMb2FkQmFsYW5jZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6QUxCOjpMb2FkQmFsYW5jZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZEJhbGFuY2VyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWRkcmVzc1R5cGU6IFRoZSB0eXBlIG9mIElQIGFkZHJlc3MgdGhhdCB0aGUgQUxCIGluc3RhbmNlIHVzZXMgdG8gcHJvdmlkZSBzZXJ2aWNlcy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEludGVybmV0OiBUaGUgQUxCIGluc3RhbmNlIHVzZXMgYSBwdWJsaWMgSVAgYWRkcmVzcy4gVGhlIGRvbWFpbiBuYW1lIG9mIHRoZSBBTEIgaW5zdGFuY2UgaXMgcmVzb2x2ZWQgdG8gdGhlIHB1YmxpYyBJUCBhZGRyZXNzLiBUaGVyZWZvcmUsIHRoZSBBTEIgaW5zdGFuY2UgY2FuIGJlIGFjY2Vzc2VkIG92ZXIgdGhlIEludGVybmV0LlxuICAgICAqIEludHJhbmV0OiBUaGUgQUxCIGluc3RhbmNlIHVzZXMgYSBwcml2YXRlIElQIGFkZHJlc3MuIFRoZSBkb21haW4gbmFtZSBvZiB0aGUgQUxCIGluc3RhbmNlIGlzIHJlc29sdmVkIHRvIHRoZSBwcml2YXRlIElQIGFkZHJlc3MuIFRoZXJlZm9yZSwgdGhlIEFMQiBpbnN0YW5jZSBjYW4gYmUgYWNjZXNzZWQgb3ZlciB0aGUgVlBDIHdoZXJlIHRoZSBBTEIgaW5zdGFuY2UgaXMgZGVwbG95ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkcmVzc1R5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvYWRCYWxhbmNlckJpbGxpbmdDb25maWc6IFRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBiaWxsaW5nIG1ldGhvZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2FkQmFsYW5jZXJCaWxsaW5nQ29uZmlnOiBSb3NMb2FkQmFsYW5jZXIuTG9hZEJhbGFuY2VyQmlsbGluZ0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9hZEJhbGFuY2VyRWRpdGlvbjogVGhlIGVkaXRpb24gb2YgdGhlIEFMQiBpbnN0YW5jZS4gRGlmZmVyZW50IGVkaXRpb25zIGhhdmUgZGlmZmVyZW50IGxpbWl0cyBhbmQgYmlsbGluZyBtZXRob2RzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQmFzaWM6IEJhc2ljIEVkaXRpb25cbiAgICAgKiBTdGFuZGFyZDogU3RhbmRhcmQgRWRpdGlvblxuICAgICAqIFN0YW5kYXJkV2l0aFdhZjogU3RhbmRhcmQgRWRpdGlvbiB3aXRoIFdBRlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlckVkaXRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvYWRCYWxhbmNlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBBTEIgaW5zdGFuY2UuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgcGVyaW9kcyguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2FkQmFsYW5jZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVGhlIElEIG9mIHRoZSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgd2hlcmUgdGhlIEFMQiBpbnN0YW5jZSBpcyBkZXBsb3llZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZU1hcHBpbmdzOiBUaGUgem9uZXMgYW5kIHRoZSB2U3dpdGNoZXMgaW4gdGhlIHpvbmVzLiBZb3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0IHR3byB6b25lcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lTWFwcGluZ3M6IEFycmF5PFJvc0xvYWRCYWxhbmNlci5ab25lTWFwcGluZ3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2Nlc3NMb2dDb25maWc6XG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzTG9nQ29uZmlnPzogUm9zTG9hZEJhbGFuY2VyLkFjY2Vzc0xvZ0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWRkcmVzc0FsbG9jYXRlZE1vZGU6IFRoZSBtb2RlIGluIHdoaWNoIElQIGFkZHJlc3NlcyBhcmUgYXNzaWduZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBGaXhlZDogVGhlIEFMQiBpbnN0YW5jZSB1c2VzIGEgc3RhdGljIElQIGFkZHJlc3MuXG4gICAgICogRHluYW1pYzogQW4gSVAgYWRkcmVzcyBpcyBkeW5hbWljYWxseSBhc3NpZ25lZCB0byB0aGUgQUxCIGluc3RhbmNlIGluIGVhY2ggem9uZS4gVGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhZGRyZXNzQWxsb2NhdGVkTW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFkZHJlc3NJcFZlcnNpb246IFRoZSBwcm90b2NvbCB2ZXJzaW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogSVB2NDogSVB2NFxuICAgICAqIER1YWxTdGFjazogZHVhbCBzdGFja1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkZHJlc3NJcFZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBiYW5kd2lkdGhQYWNrYWdlSWQ6IEF0dGFjaCBjb21tb24gYmFuZHdpZHRoIHBhY2thZ2UgdG8gbG9hZCBiYWxhbmNlci4gSXQgb25seSB0YWtlcyBlZmZlY3Qgd2hlbiBBZGRyZXNzVHlwZT1JbnRlcm5ldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGhQYWNrYWdlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxldGlvblByb3RlY3Rpb25FbmFibGVkOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgZGVsZXRpb24gcHJvdGVjdGlvbi4gRGVmYXVsdCB2YWx1ZTogZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Qcm90ZWN0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtb2RpZmljYXRpb25Qcm90ZWN0aW9uQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiBtb2RpZmljYXRpb24gcHJvdGVjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb2RpZmljYXRpb25Qcm90ZWN0aW9uQ29uZmlnPzogUm9zTG9hZEJhbGFuY2VyLk1vZGlmaWNhdGlvblByb3RlY3Rpb25Db25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NMb2FkQmFsYW5jZXIuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkFMQjo6TG9hZEJhbGFuY2VyYFxuICovXG5leHBvcnQgY2xhc3MgTG9hZEJhbGFuY2VyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBZGRyZXNzVHlwZTogVGhlIHR5cGUgb2YgSVAgYWRkcmVzcyB0aGF0IHRoZSBBTEIgaW5zdGFuY2UgdXNlcyB0byBwcm92aWRlIHNlcnZpY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWRkcmVzc1R5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBETlNOYW1lOiBUaGUgZG9tYWluIG5hbWUgb2YgdGhlIEFMQiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRuc05hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMb2FkQmFsYW5jZXJFZGl0aW9uOiBUaGUgZWRpdGlvbiBvZiB0aGUgQUxCIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9hZEJhbGFuY2VyRWRpdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExvYWRCYWxhbmNlcklkOiBUaGUgSUQgb2YgdGhlIEFMQiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvYWRCYWxhbmNlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnBjSWQ6IFRoZSBJRCBvZiB0aGUgdmlydHVhbCBwcml2YXRlIGNsb3VkIChWUEMpIHdoZXJlIHRoZSBBTEIgaW5zdGFuY2UgaXMgZGVwbG95ZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFpvbmVNYXBwaW5nczogVGhlIHpvbmVzLCB2U3dpdGNoZXMgYW5kIGFkZHJlc3NlcyB3aGljaCBhcmUgbWFwcGVkIHRvIHRoZSB6b25lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clpvbmVNYXBwaW5nczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkFMQjo6TG9hZEJhbGFuY2VyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBMb2FkQmFsYW5jZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NMb2FkQmFsYW5jZXIgPSBuZXcgUm9zTG9hZEJhbGFuY2VyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYWRkcmVzc0lwVmVyc2lvbjogcHJvcHMuYWRkcmVzc0lwVmVyc2lvbixcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlckVkaXRpb246IHByb3BzLmxvYWRCYWxhbmNlckVkaXRpb24sXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlckJpbGxpbmdDb25maWc6IHByb3BzLmxvYWRCYWxhbmNlckJpbGxpbmdDb25maWcsXG4gICAgICAgICAgICB6b25lTWFwcGluZ3M6IHByb3BzLnpvbmVNYXBwaW5ncyxcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblByb3RlY3Rpb25Db25maWc6IHByb3BzLm1vZGlmaWNhdGlvblByb3RlY3Rpb25Db25maWcsXG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJOYW1lOiBwcm9wcy5sb2FkQmFsYW5jZXJOYW1lLFxuICAgICAgICAgICAgYWNjZXNzTG9nQ29uZmlnOiBwcm9wcy5hY2Nlc3NMb2dDb25maWcsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBiYW5kd2lkdGhQYWNrYWdlSWQ6IHByb3BzLmJhbmR3aWR0aFBhY2thZ2VJZCxcbiAgICAgICAgICAgIGFkZHJlc3NUeXBlOiBwcm9wcy5hZGRyZXNzVHlwZSxcbiAgICAgICAgICAgIGFkZHJlc3NBbGxvY2F0ZWRNb2RlOiBwcm9wcy5hZGRyZXNzQWxsb2NhdGVkTW9kZSxcbiAgICAgICAgICAgIGRlbGV0aW9uUHJvdGVjdGlvbkVuYWJsZWQ6IHByb3BzLmRlbGV0aW9uUHJvdGVjdGlvbkVuYWJsZWQsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0xvYWRCYWxhbmNlcjtcbiAgICAgICAgdGhpcy5hdHRyQWRkcmVzc1R5cGUgPSByb3NMb2FkQmFsYW5jZXIuYXR0ckFkZHJlc3NUeXBlO1xuICAgICAgICB0aGlzLmF0dHJEbnNOYW1lID0gcm9zTG9hZEJhbGFuY2VyLmF0dHJEbnNOYW1lO1xuICAgICAgICB0aGlzLmF0dHJMb2FkQmFsYW5jZXJFZGl0aW9uID0gcm9zTG9hZEJhbGFuY2VyLmF0dHJMb2FkQmFsYW5jZXJFZGl0aW9uO1xuICAgICAgICB0aGlzLmF0dHJMb2FkQmFsYW5jZXJJZCA9IHJvc0xvYWRCYWxhbmNlci5hdHRyTG9hZEJhbGFuY2VySWQ7XG4gICAgICAgIHRoaXMuYXR0clZwY0lkID0gcm9zTG9hZEJhbGFuY2VyLmF0dHJWcGNJZDtcbiAgICAgICAgdGhpcy5hdHRyWm9uZU1hcHBpbmdzID0gcm9zTG9hZEJhbGFuY2VyLmF0dHJab25lTWFwcGluZ3M7XG4gICAgfVxufVxuIl19