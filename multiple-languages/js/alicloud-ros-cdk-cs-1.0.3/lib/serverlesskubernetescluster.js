"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerlessKubernetesCluster = exports.ServerlessKubernetesClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "ServerlessKubernetesClusterProperty", { enumerable: true, get: function () { return cs_generated_1.RosServerlessKubernetesCluster; } });
/**
 * A ROS resource type:  `ALIYUN::CS::ServerlessKubernetesCluster`
 */
class ServerlessKubernetesCluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::CS::ServerlessKubernetesCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosServerlessKubernetesCluster = new cs_generated_1.RosServerlessKubernetesCluster(this, id, {
            kubernetesVersion: props.kubernetesVersion,
            endpointPublicAccess: props.endpointPublicAccess,
            zoneId: props.zoneId,
            vSwitchIds: props.vSwitchIds,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            addons: props.addons,
            natGateway: props.natGateway === undefined || props.natGateway === null ? false : props.natGateway,
            name: props.name,
            vpcId: props.vpcId,
            serviceCidr: props.serviceCidr === undefined || props.serviceCidr === null ? '172.19.0.0/20' : props.serviceCidr,
            tags: props.tags,
            privateZone: props.privateZone,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServerlessKubernetesCluster;
        this.attrClusterId = rosServerlessKubernetesCluster.attrClusterId;
        this.attrDefaultUserKubeConfig = rosServerlessKubernetesCluster.attrDefaultUserKubeConfig;
        this.attrNodes = rosServerlessKubernetesCluster.attrNodes;
        this.attrPrivateUserKubConfig = rosServerlessKubernetesCluster.attrPrivateUserKubConfig;
        this.attrScalingConfigurationId = rosServerlessKubernetesCluster.attrScalingConfigurationId;
        this.attrScalingGroupId = rosServerlessKubernetesCluster.attrScalingGroupId;
        this.attrScalingRuleId = rosServerlessKubernetesCluster.attrScalingRuleId;
        this.attrTaskId = rosServerlessKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosServerlessKubernetesCluster.attrWorkerRamRoleName;
    }
}
exports.ServerlessKubernetesCluster = ServerlessKubernetesCluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVybGVzc2t1YmVybmV0ZXNjbHVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVybGVzc2t1YmVybmV0ZXNjbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpREFBZ0U7QUFFckIsb0hBRmxDLDZDQUE4QixPQUV1QztBQTZFOUU7O0dBRUc7QUFDSCxNQUFhLDJCQUE0QixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBb0R6RDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVDLEVBQUUsbUNBQTJDLElBQUk7UUFDbEksS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLDhCQUE4QixHQUFHLElBQUksNkNBQThCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFDbEcsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDaEgsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLDhCQUE4QixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQThCLENBQUMsYUFBYSxDQUFDO1FBQ2xFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyw4QkFBOEIsQ0FBQyx5QkFBeUIsQ0FBQztRQUMxRixJQUFJLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDLFNBQVMsQ0FBQztRQUMxRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsOEJBQThCLENBQUMsd0JBQXdCLENBQUM7UUFDeEYsSUFBSSxDQUFDLDBCQUEwQixHQUFHLDhCQUE4QixDQUFDLDBCQUEwQixDQUFDO1FBQzVGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyw4QkFBOEIsQ0FBQyxrQkFBa0IsQ0FBQztRQUM1RSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsOEJBQThCLENBQUMsaUJBQWlCLENBQUM7UUFDMUUsSUFBSSxDQUFDLFVBQVUsR0FBRyw4QkFBOEIsQ0FBQyxVQUFVLENBQUM7UUFDNUQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLDhCQUE4QixDQUFDLHFCQUFxQixDQUFDO0lBQ3RGLENBQUM7Q0FDSjtBQXhGRCxrRUF3RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTZXJ2ZXJsZXNzS3ViZXJuZXRlc0NsdXN0ZXIgfSBmcm9tICcuL2NzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1NlcnZlcmxlc3NLdWJlcm5ldGVzQ2x1c3RlciBhcyBTZXJ2ZXJsZXNzS3ViZXJuZXRlc0NsdXN0ZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q1M6OlNlcnZlcmxlc3NLdWJlcm5ldGVzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJsZXNzS3ViZXJuZXRlc0NsdXN0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgY2x1c3Rlci4gVGhlIGNsdXN0ZXIgbmFtZSBjYW4gdXNlIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMsIENoaW5lc2UgY2hhcmFjdGVycywgbnVtYmVycywgYW5kIGRhc2hlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhZGRvbnM6IFRoZSBhZGQtb25zIHRvIGJlIGluc3RhbGxlZCBmb3IgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkb25zPzogQXJyYXk8Um9zU2VydmVybGVzc0t1YmVybmV0ZXNDbHVzdGVyLkFkZG9uc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuZHBvaW50UHVibGljQWNjZXNzOiBXaGV0aGVyIHRvIGVuYWJsZSB0aGUgcHVibGljIG5ldHdvcmsgQVBJIFNlcnZlcjpcbiAgICAgKiB0cnVlOiB3aGljaCBtZWFucyB0aGF0IHRoZSBwdWJsaWMgbmV0d29yayBBUEkgU2VydmVyIGlzIG9wZW4uXG4gICAgICogZmFsc2U6IElmIHNldCB0byBmYWxzZSwgdGhlIEFQSSBzZXJ2ZXIgb24gdGhlIHB1YmxpYyBuZXR3b3JrIHdpbGwgbm90IGJlIGNyZWF0ZWQsIG9ubHkgdGhlIEFQSSBzZXJ2ZXIgb24gdGhlIHByaXZhdGUgbmV0d29yayB3aWxsIGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnRQdWJsaWNBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga3ViZXJuZXRlc1ZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBLdWJlcm5ldGVzIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkga3ViZXJuZXRlc1ZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYXRHYXRld2F5OiBXaGV0aGVyIHRvIGNyZWF0ZSBhIE5BVCBnYXRld2F5LiBUaGUgdmFsdWUgY2FuIGJlIHRydWUgb3IgZmFsc2UuIElmIG5vdCBzZXQsIHRoZSBzeXN0ZW0gZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmF0R2F0ZXdheT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcml2YXRlWm9uZTogV2hldGhlciB0byBlbmFibGUgUHJpdmF0ZVpvbmUgZm9yIHNlcnZpY2UgZGlzY292ZXJ5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaXZhdGVab25lPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZDogU3BlY2lmaWVzIHRoZSBJRCBvZiB0aGUgc2VjdXJpdHkgZ3JvdXAgdG8gd2hpY2ggdGhlIGNsdXN0ZXIgRUNTIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VydmljZUNpZHI6IFRoZSBzZXJ2aWNlIG5ldHdvcmsgc2VnbWVudCBjYW5ub3QgY29uZmxpY3Qgd2l0aCB0aGUgVlBDIG5ldHdvcmsgc2VnbWVudCBhbmQgdGhlIGNvbnRhaW5lciBuZXR3b3JrIHNlZ21lbnQuIFdoZW4gdGhlIHN5c3RlbSBpcyBzZWxlY3RlZCB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBhIFZQQywgdGhlIG5ldHdvcmsgc2VnbWVudCAxNzIuMTkuMC4wLzIwIGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlQ2lkcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZyB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zU2VydmVybGVzc0t1YmVybmV0ZXNDbHVzdGVyLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFZQQyBJRC4gSWYgbm90IHNldCwgdGhlIHN5c3RlbSB3aWxsIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGEgVlBDLCBhbmQgdGhlIFZQQyBuZXR3b3JrIHNlZ21lbnQgY3JlYXRlZCBieSB0aGUgc3lzdGVtIGlzIDE5Mi4xNjguMC4wLzE2LiBcbiAgICAgKiBWcGNJZCBhbmQgVlN3aXRjaElkIGNhbiBvbmx5IGJlIGVtcHR5IGF0IHRoZSBzYW1lIHRpbWUgb3Igc2V0IHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBJZiBub3Qgc2V0LCB0aGUgc3lzdGVtIHdpbGwgYXV0b21hdGljYWxseSBjcmVhdGUgYSBzd2l0Y2gsIGFuZCB0aGUgbmV0d29yayBzZWdtZW50IG9mIHRoZSBzd2l0Y2ggY3JlYXRlZCBieSB0aGUgc3lzdGVtIGlzIDE5Mi4xNjguMC4wLzE4LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZHM6IFRoZSBJRHMgb2YgVlN3aXRjaGVzLiBJZiB5b3UgbGVhdmUgdGhpcyBwcm9wZXJ0eSBlbXB0eSwgdGhlIHN5c3RlbSBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgYSBWU3dpdGNoLlxuICAgICAqIE5vdGUgWW91IG11c3Qgc3BlY2lmeSBib3RoIHRoZSBWcGNJZCBhbmQgVlN3aXRjaElkcyBvciBsZWF2ZSBib3RoIG9mIHRoZW0gZW1wdHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkcz86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IFRoZSB6b25lIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q1M6OlNlcnZlcmxlc3NLdWJlcm5ldGVzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlcmxlc3NLdWJlcm5ldGVzQ2x1c3RlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVmYXVsdFVzZXJLdWJlQ29uZmlnOiBEZWZhdWx0IHVzZXIga3ViZXJuZXRlcyBjb25maWcgd2hpY2ggaXMgdXNlZCBmb3IgY29uZmlndXJpbmcgY2x1c3RlciBjcmVkZW50aWFscy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlZmF1bHRVc2VyS3ViZUNvbmZpZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5vZGVzOiBUaGUgbGlzdCBvZiBjbHVzdGVyIG5vZGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTm9kZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQcml2YXRlVXNlckt1YkNvbmZpZzogUHJpdmF0ZSB1c2VyIGt1YmVybmV0ZXMgY29uZmlnIHdoaWNoIGlzIHVzZWQgZm9yIGNvbmZpZ3VyaW5nIGNsdXN0ZXIgY3JlZGVudGlhbHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcml2YXRlVXNlckt1YkNvbmZpZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNjYWxpbmdDb25maWd1cmF0aW9uSWQ6IFNjYWxpbmcgY29uZmlndXJhdGlvbiBpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2NhbGluZ0NvbmZpZ3VyYXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNjYWxpbmdHcm91cElkOiBTY2FsaW5nIGdyb3VwIGlkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTY2FsaW5nR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNjYWxpbmdSdWxlSWQ6IFNjYWxpbmcgcnVsZSBpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2NhbGluZ1J1bGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRhc2tJZDogVGFzayBJRC4gQXV0b21hdGljYWxseSBhc3NpZ25lZCBieSB0aGUgc3lzdGVtLCB0aGUgdXNlciBxdWVyaWVzIHRoZSB0YXNrIHN0YXR1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhc2tJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFdvcmtlclJhbVJvbGVOYW1lOiBXb3JrZXIgcmFtIHJvbGUgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cldvcmtlclJhbVJvbGVOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q1M6OlNlcnZlcmxlc3NLdWJlcm5ldGVzQ2x1c3RlcmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU2VydmVybGVzc0t1YmVybmV0ZXNDbHVzdGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zU2VydmVybGVzc0t1YmVybmV0ZXNDbHVzdGVyID0gbmV3IFJvc1NlcnZlcmxlc3NLdWJlcm5ldGVzQ2x1c3Rlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGt1YmVybmV0ZXNWZXJzaW9uOiBwcm9wcy5rdWJlcm5ldGVzVmVyc2lvbixcbiAgICAgICAgICAgIGVuZHBvaW50UHVibGljQWNjZXNzOiBwcm9wcy5lbmRwb2ludFB1YmxpY0FjY2VzcyxcbiAgICAgICAgICAgIHpvbmVJZDogcHJvcHMuem9uZUlkLFxuICAgICAgICAgICAgdlN3aXRjaElkczogcHJvcHMudlN3aXRjaElkcyxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZDogcHJvcHMuc2VjdXJpdHlHcm91cElkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBhZGRvbnM6IHByb3BzLmFkZG9ucyxcbiAgICAgICAgICAgIG5hdEdhdGV3YXk6IHByb3BzLm5hdEdhdGV3YXkgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5uYXRHYXRld2F5ID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5uYXRHYXRld2F5LFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIHNlcnZpY2VDaWRyOiBwcm9wcy5zZXJ2aWNlQ2lkciA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnNlcnZpY2VDaWRyID09PSBudWxsID8gJzE3Mi4xOS4wLjAvMjAnIDogcHJvcHMuc2VydmljZUNpZHIsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgcHJpdmF0ZVpvbmU6IHByb3BzLnByaXZhdGVab25lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NlcnZlcmxlc3NLdWJlcm5ldGVzQ2x1c3RlcjtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gcm9zU2VydmVybGVzc0t1YmVybmV0ZXNDbHVzdGVyLmF0dHJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0ckRlZmF1bHRVc2VyS3ViZUNvbmZpZyA9IHJvc1NlcnZlcmxlc3NLdWJlcm5ldGVzQ2x1c3Rlci5hdHRyRGVmYXVsdFVzZXJLdWJlQ29uZmlnO1xuICAgICAgICB0aGlzLmF0dHJOb2RlcyA9IHJvc1NlcnZlcmxlc3NLdWJlcm5ldGVzQ2x1c3Rlci5hdHRyTm9kZXM7XG4gICAgICAgIHRoaXMuYXR0clByaXZhdGVVc2VyS3ViQ29uZmlnID0gcm9zU2VydmVybGVzc0t1YmVybmV0ZXNDbHVzdGVyLmF0dHJQcml2YXRlVXNlckt1YkNvbmZpZztcbiAgICAgICAgdGhpcy5hdHRyU2NhbGluZ0NvbmZpZ3VyYXRpb25JZCA9IHJvc1NlcnZlcmxlc3NLdWJlcm5ldGVzQ2x1c3Rlci5hdHRyU2NhbGluZ0NvbmZpZ3VyYXRpb25JZDtcbiAgICAgICAgdGhpcy5hdHRyU2NhbGluZ0dyb3VwSWQgPSByb3NTZXJ2ZXJsZXNzS3ViZXJuZXRlc0NsdXN0ZXIuYXR0clNjYWxpbmdHcm91cElkO1xuICAgICAgICB0aGlzLmF0dHJTY2FsaW5nUnVsZUlkID0gcm9zU2VydmVybGVzc0t1YmVybmV0ZXNDbHVzdGVyLmF0dHJTY2FsaW5nUnVsZUlkO1xuICAgICAgICB0aGlzLmF0dHJUYXNrSWQgPSByb3NTZXJ2ZXJsZXNzS3ViZXJuZXRlc0NsdXN0ZXIuYXR0clRhc2tJZDtcbiAgICAgICAgdGhpcy5hdHRyV29ya2VyUmFtUm9sZU5hbWUgPSByb3NTZXJ2ZXJsZXNzS3ViZXJuZXRlc0NsdXN0ZXIuYXR0cldvcmtlclJhbVJvbGVOYW1lO1xuICAgIH1cbn1cbiJdfQ==