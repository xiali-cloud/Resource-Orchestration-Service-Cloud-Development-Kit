"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.K8sSlbBinding = exports.K8sSlbBindingProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const edas_generated_1 = require("./edas.generated");
Object.defineProperty(exports, "K8sSlbBindingProperty", { enumerable: true, get: function () { return edas_generated_1.RosK8sSlbBinding; } });
/**
 * A ROS resource type:  `ALIYUN::EDAS::K8sSlbBinding`
 */
class K8sSlbBinding extends ros.Resource {
    /**
     * Create a new `ALIYUN::EDAS::K8sSlbBinding`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosK8sSlbBinding = new edas_generated_1.RosK8sSlbBinding(this, id, {
            type: props.type,
            appId: props.appId,
            clusterId: props.clusterId,
            scheduler: props.scheduler,
            specification: props.specification,
            loadBalancerId: props.loadBalancerId,
            servicePortInfos: props.servicePortInfos,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosK8sSlbBinding;
        this.attrAddress = rosK8sSlbBinding.attrAddress;
        this.attrAppId = rosK8sSlbBinding.attrAppId;
        this.attrChangeOrderId = rosK8sSlbBinding.attrChangeOrderId;
        this.attrLoadBalancerId = rosK8sSlbBinding.attrLoadBalancerId;
        this.attrLoadBalancerName = rosK8sSlbBinding.attrLoadBalancerName;
    }
}
exports.K8sSlbBinding = K8sSlbBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiazhzc2xiYmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIms4c3NsYmJpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUFvRDtBQUV2QixzR0FGcEIsaUNBQWdCLE9BRXlCO0FBOENsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0MzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksaUNBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1NBQzNDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO1FBQzVELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztRQUM5RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7SUFDdEUsQ0FBQztDQUNKO0FBMURELHNDQTBEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0s4c1NsYkJpbmRpbmcgfSBmcm9tICcuL2VkYXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSzhzU2xiQmluZGluZyBhcyBLOHNTbGJCaW5kaW5nUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVEQVM6Oks4c1NsYkJpbmRpbmdgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSzhzU2xiQmluZGluZ1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFwcElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlcnZpY2VQb3J0SW5mb3M6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcG9ydHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZVBvcnRJbmZvczogQXJyYXk8Um9zSzhzU2xiQmluZGluZy5TZXJ2aWNlUG9ydEluZm9zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHlwZTogVGhlIHR5cGUgb2YgdGhlIFNMQiBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBpbnRlcm5ldCBhbmQgaW50cmFuZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9hZEJhbGFuY2VySWQ6IFRoZSBJRCBvZiB0aGUgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS4gSWYgeW91IGxlYXZlIHRoaXMgcGFyYW1ldGVyIGVtcHR5LCBFbnRlcnByaXNlIERpc3RyaWJ1dGVkIEFwcGxpY2F0aW9uIFNlcnZpY2UgKEVEQVMpIGF1dG9tYXRpY2FsbHkgcHVyY2hhc2VzIGFuIFNMQiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2FkQmFsYW5jZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNjaGVkdWxlcjogVGhlIHNjaGVkdWxpbmcgYWxnb3JpdGhtLiBWYWxpZCB2YWx1ZXM6IFxuICAgICAqIHdycjogQmFja2VuZCBzZXJ2ZXJzIHRoYXQgaGF2ZSBoaWdoZXIgd2VpZ2h0cyByZWNlaXZlIG1vcmUgcmVxdWVzdHMgdGhhbiB0aG9zZSB0aGF0IGhhdmUgbG93ZXIgd2VpZ2h0cy5cbiAgICAgKiBycjogUmVxdWVzdHMgYXJlIGRpc3RyaWJ1dGVkIHRvIGJhY2tlbmQgc2VydmVycyBpbiBzZXF1ZW5jZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiByclxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjaGVkdWxlcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwZWNpZmljYXRpb246IFRoZSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNwZWNpZmljYXRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVEQVM6Oks4c1NsYkJpbmRpbmdgXG4gKi9cbmV4cG9ydCBjbGFzcyBLOHNTbGJCaW5kaW5nIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBZGRyZXNzOiBUaGUgYWRkcmVzcyBvZiBsb2FkIGJhbGFuY2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWRkcmVzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFwcElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDaGFuZ2VPcmRlcklkOiBUaGUgSUQgb2YgdGhlIGNoYW5nZSBwcm9jZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2hhbmdlT3JkZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExvYWRCYWxhbmNlcklkOiBUaGUgSUQgb2YgbG9hZCBiYWxhbmNlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvYWRCYWxhbmNlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTG9hZEJhbGFuY2VyTmFtZTogVGhlIG5hbWUgb2YgbG9hZCBiYWxhbmNlciBpbnN0YW5jZSBkZWZpbmVkIGluIEVEQVMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2FkQmFsYW5jZXJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RURBUzo6SzhzU2xiQmluZGluZ2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSzhzU2xiQmluZGluZ1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0s4c1NsYkJpbmRpbmcgPSBuZXcgUm9zSzhzU2xiQmluZGluZyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHR5cGU6IHByb3BzLnR5cGUsXG4gICAgICAgICAgICBhcHBJZDogcHJvcHMuYXBwSWQsXG4gICAgICAgICAgICBjbHVzdGVySWQ6IHByb3BzLmNsdXN0ZXJJZCxcbiAgICAgICAgICAgIHNjaGVkdWxlcjogcHJvcHMuc2NoZWR1bGVyLFxuICAgICAgICAgICAgc3BlY2lmaWNhdGlvbjogcHJvcHMuc3BlY2lmaWNhdGlvbixcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlcklkOiBwcm9wcy5sb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgICAgIHNlcnZpY2VQb3J0SW5mb3M6IHByb3BzLnNlcnZpY2VQb3J0SW5mb3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSzhzU2xiQmluZGluZztcbiAgICAgICAgdGhpcy5hdHRyQWRkcmVzcyA9IHJvc0s4c1NsYkJpbmRpbmcuYXR0ckFkZHJlc3M7XG4gICAgICAgIHRoaXMuYXR0ckFwcElkID0gcm9zSzhzU2xiQmluZGluZy5hdHRyQXBwSWQ7XG4gICAgICAgIHRoaXMuYXR0ckNoYW5nZU9yZGVySWQgPSByb3NLOHNTbGJCaW5kaW5nLmF0dHJDaGFuZ2VPcmRlcklkO1xuICAgICAgICB0aGlzLmF0dHJMb2FkQmFsYW5jZXJJZCA9IHJvc0s4c1NsYkJpbmRpbmcuYXR0ckxvYWRCYWxhbmNlcklkO1xuICAgICAgICB0aGlzLmF0dHJMb2FkQmFsYW5jZXJOYW1lID0gcm9zSzhzU2xiQmluZGluZy5hdHRyTG9hZEJhbGFuY2VyTmFtZTtcbiAgICB9XG59XG4iXX0=