"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerGroup = exports.ConsumerGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rocketmq5_generated_1 = require("./rocketmq5.generated");
Object.defineProperty(exports, "ConsumerGroupProperty", { enumerable: true, get: function () { return rocketmq5_generated_1.RosConsumerGroup; } });
/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ5::ConsumerGroup`
 */
class ConsumerGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::ROCKETMQ5::ConsumerGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosConsumerGroup = new rocketmq5_generated_1.RosConsumerGroup(this, id, {
            consumerGroupId: props.consumerGroupId,
            instanceId: props.instanceId,
            consumeRetryPolicy: props.consumeRetryPolicy,
            deliveryOrderType: props.deliveryOrderType,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConsumerGroup;
        this.attrConsumerGroupId = rosConsumerGroup.attrConsumerGroupId;
        this.attrDeliveryOrderType = rosConsumerGroup.attrDeliveryOrderType;
        this.attrInstanceId = rosConsumerGroup.attrInstanceId;
    }
}
exports.ConsumerGroup = ConsumerGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtZXJncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnN1bWVyZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLCtEQUF5RDtBQUU1QixzR0FGcEIsc0NBQWdCLE9BRXlCO0FBb0NsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0IzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksc0NBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtZQUMxQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDdkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7UUFDaEUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO1FBQ3BFLElBQUksQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0lBQzFELENBQUM7Q0FDSjtBQTVDRCxzQ0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NDb25zdW1lckdyb3VwIH0gZnJvbSAnLi9yb2NrZXRtcTUuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ29uc3VtZXJHcm91cCBhcyBDb25zdW1lckdyb3VwUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPQ0tFVE1RNTo6Q29uc3VtZXJHcm91cGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25zdW1lckdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29uc3VtZVJldHJ5UG9saWN5OiBUaGUgY29uc3VtcHRpb24gcmV0cnkgcG9saWN5IG9mIHRoZSBjb25zdW1lciBncm91cCB0byBiZSBjcmVhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnN1bWVSZXRyeVBvbGljeTogUm9zQ29uc3VtZXJHcm91cC5Db25zdW1lUmV0cnlQb2xpY3lQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnN1bWVyR3JvdXBJZDogVGhlIElEIG9mIHRoZSBjb25zdW1lciBncm91cCB0byBiZSBjcmVhdGVkLiBVc2VkIHRvIGlkZW50aWZ5IGNvbnN1bWVyIGdyb3VwcywgZ2xvYmFsbHkgdW5pcXVlLlxuICAgICAqIFRoZSB2YWx1ZSBkZXNjcmlwdGlvbiBpcyBhcyBmb2xsb3dzOlxuICAgICAqIENoYXJhY3RlciBsaW1pdGF0aW9uOiBzdXBwb3J0cyBsZXR0ZXJzIGF+eiBvciBBLVosIG51bWJlcnMgMC05LCB1bmRlcnNjb3JlIChfKSwgZGFzaCAoLSkgYW5kIHBlcmNlbnQgc2lnbiAoJSkuXG4gICAgICogTGVuZ3RoIGxpbWl0OiAxLTYwIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29uc3VtZXJHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxpdmVyeU9yZGVyVHlwZTogRGVsaXZlcnkgc2VxdWVuY2Ugb2YgdGhlIGNvbnN1bWVyIGdyb3VwIHRvIGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsaXZlcnlPcmRlclR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVtYXJrOiBUaGUgcmVtYXJrIG9mIHRoZSBjb25zdW1lciBncm91cCB0byBiZSBjcmVhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbWFyaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Uk9DS0VUTVE1OjpDb25zdW1lckdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgQ29uc3VtZXJHcm91cCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29uc3VtZXJHcm91cElkOiBUaGUgSUQgb2YgdGhlIGNvbnN1bWVyIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29uc3VtZXJHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVsaXZlcnlPcmRlclR5cGU6IERlbGl2ZXJ5IHNlcXVlbmNlIG9mIGNvbnN1bWVyIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVsaXZlcnlPcmRlclR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJPQ0tFVE1RNTo6Q29uc3VtZXJHcm91cGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQ29uc3VtZXJHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0NvbnN1bWVyR3JvdXAgPSBuZXcgUm9zQ29uc3VtZXJHcm91cCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGNvbnN1bWVyR3JvdXBJZDogcHJvcHMuY29uc3VtZXJHcm91cElkLFxuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNvbnN1bWVSZXRyeVBvbGljeTogcHJvcHMuY29uc3VtZVJldHJ5UG9saWN5LFxuICAgICAgICAgICAgZGVsaXZlcnlPcmRlclR5cGU6IHByb3BzLmRlbGl2ZXJ5T3JkZXJUeXBlLFxuICAgICAgICAgICAgcmVtYXJrOiBwcm9wcy5yZW1hcmssXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ29uc3VtZXJHcm91cDtcbiAgICAgICAgdGhpcy5hdHRyQ29uc3VtZXJHcm91cElkID0gcm9zQ29uc3VtZXJHcm91cC5hdHRyQ29uc3VtZXJHcm91cElkO1xuICAgICAgICB0aGlzLmF0dHJEZWxpdmVyeU9yZGVyVHlwZSA9IHJvc0NvbnN1bWVyR3JvdXAuYXR0ckRlbGl2ZXJ5T3JkZXJUeXBlO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zQ29uc3VtZXJHcm91cC5hdHRySW5zdGFuY2VJZDtcbiAgICB9XG59XG4iXX0=