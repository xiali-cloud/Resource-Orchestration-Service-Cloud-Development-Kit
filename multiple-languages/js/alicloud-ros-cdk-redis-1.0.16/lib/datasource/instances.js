"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instances = exports.InstancesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const redis_generated_1 = require("./redis.generated");
Object.defineProperty(exports, "InstancesProperty", { enumerable: true, get: function () { return redis_generated_1.RosInstances; } });
/**
 * A ROS resource type:  `DATASOURCE::REDIS::Instances`
 */
class Instances extends ros.Resource {
    /**
     * Create a new `DATASOURCE::REDIS::Instances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstances = new redis_generated_1.RosInstances(this, id, {
            architectureType: props.architectureType,
            engineVersion: props.engineVersion,
            editionType: props.editionType,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            vSwitchId: props.vSwitchId,
            instanceClass: props.instanceClass,
            expired: props.expired,
            vpcId: props.vpcId,
            privateIp: props.privateIp,
            instanceStatus: props.instanceStatus,
            chargeType: props.chargeType,
            networkType: props.networkType,
            searchKey: props.searchKey,
            globalInstance: props.globalInstance,
            instanceType: props.instanceType,
            instanceIds: props.instanceIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstances;
        this.attrInstanceIds = rosInstances.attrInstanceIds;
        this.attrInstances = rosInstances.attrInstances;
    }
}
exports.Instances = Instances;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5Qyx1REFBaUQ7QUFFeEIsa0dBRmhCLDhCQUFZLE9BRXFCO0FBOEgxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQXdCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNySCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksOEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1NBQ2pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUM7SUFDcEQsQ0FBQztDQUNKO0FBbERELDhCQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlcyB9IGZyb20gJy4vcmVkaXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2VzIGFzIEluc3RhbmNlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6UkVESVM6Okluc3RhbmNlc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhcmNoaXRlY3R1cmVUeXBlOiBUaGUgYXJjaGl0ZWN0dXJlIG9mIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGNsdXN0ZXI6IFRoZSBpbnN0YW5jZSBpcyBhIGNsdXN0ZXIgaW5zdGFuY2UuXG4gICAgICogc3RhbmRhcmQ6IFRoZSBpbnN0YW5jZSBpcyBhIHN0YW5kYXJkIGluc3RhbmNlLlxuICAgICAqIHJ3c3BsaXQ6IFRoZSBpbnN0YW5jZSBpcyBhIHJlYWQvd3JpdGUgc3BsaXR0aW5nIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFyY2hpdGVjdHVyZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUHJlUGFpZDogc3Vic2NyaXB0aW9uXG4gICAgICogUG9zdFBhaWQ6IHBheS1hcy15b3UtZ29cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZWRpdGlvblR5cGU6IFRoZSBlZGl0aW9uIG9mIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIENvbW11bml0eTogQ29tbXVuaXR5IEVkaXRpb25cbiAgICAgKiBFbnRlcnByaXNlOiBFbmhhbmNlIEVkaXRpb24gKFRhaXIpXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWRpdGlvblR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmdpbmVWZXJzaW9uOiBUaGUgZGF0YWJhc2UgZW5naW5lIHZlcnNpb24gb2YgdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IDIuOCwgNC4wLCBhbmQgNS4wLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuZ2luZVZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBleHBpcmVkOiBTcGVjaWZpZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgaGFzIGV4cGlyZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBUaGUgaW5zdGFuY2UgaGFzIGV4cGlyZWQuXG4gICAgICogZmFsc2U6IFRoZSBpbnN0YW5jZSBoYXMgbm90IGV4cGlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZXhwaXJlZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdsb2JhbEluc3RhbmNlOiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlIGNoaWxkIGluc3RhbmNlcyBvZiBkaXN0cmlidXRlZCBpbnN0YW5jZXMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBPbmx5IGNoaWxkIGluc3RhbmNlcyBhcmUgcmV0dXJuZWQuXG4gICAgICogZmFsc2U6IENoaWxkIGluc3RhbmNlcyBhcmUgbm90IHJldHVybmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdsb2JhbEluc3RhbmNlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDbGFzczogVGhlIGluc3RhbmNlIHR5cGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDbGFzcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlSWRzOiBUaGUgSURzIG9mIGluc3RhbmNlcy5cbiAgICAgKiBJZiB5b3Ugc3BlY2lmeSBtdWx0aXBsZSBpbnN0YW5jZSBJRHMsIHNlcGFyYXRlIHRoZSBpbnN0YW5jZSBJRHMgd2l0aCBjb21tYXMgKCwpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWRzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VTdGF0dXM6IFRoZSBzdGF0ZSBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBOb3JtYWw6IFRoZSBpbnN0YW5jZSBpcyBub3JtYWwuXG4gICAgICogQ3JlYXRpbmc6IFRoZSBpbnN0YW5jZSBpcyBiZWluZyBjcmVhdGVkLlxuICAgICAqIENoYW5naW5nOiBUaGUgY29uZmlndXJhdGlvbnMgb2YgdGhlIGluc3RhbmNlIGFyZSBiZWluZyBjaGFuZ2VkLlxuICAgICAqIEluYWN0aXZlOiBUaGUgaW5zdGFuY2UgaXMgZGlzYWJsZWQuXG4gICAgICogRmx1c2hpbmc6IFRoZSBpbnN0YW5jZSBpcyBiZWluZyByZWxlYXNlZC5cbiAgICAgKiBSZWxlYXNlZDogVGhlIGluc3RhbmNlIGlzIHJlbGVhc2VkLlxuICAgICAqIFRyYW5zZm9ybWluZzogVGhlIGluc3RhbmNlIGlzIGJlaW5nIHRyYW5zZm9ybWVkLlxuICAgICAqIFVuYXZhaWxhYmxlOiBUaGUgaW5zdGFuY2UgaXMgc3VzcGVuZGVkLlxuICAgICAqIEVycm9yOiBUaGUgaW5zdGFuY2UgY2Fubm90IGJlIGNyZWF0ZWQuXG4gICAgICogTWlncmF0aW5nOiBUaGUgaW5zdGFuY2UgaXMgYmVpbmcgbWlncmF0ZWQuXG4gICAgICogQmFja3VwUmVjb3ZlcmluZzogVGhlIGluc3RhbmNlIGlzIGJlaW5nIHJlc3RvcmVkIGZyb20gYSBiYWNrdXAuXG4gICAgICogTWlub3JWZXJzaW9uVXBncmFkaW5nOiBUaGUgbWlub3IgdmVyc2lvbiBvZiB0aGUgaW5zdGFuY2UgaXMgYmVpbmcgdXBkYXRlZC5cbiAgICAgKiBOZXR3b3JrTW9kaWZ5aW5nOiBUaGUgbmV0d29yayB0eXBlIG9mIHRoZSBpbnN0YW5jZSBpcyBiZWluZyBjaGFuZ2VkLlxuICAgICAqIFNTTE1vZGlmeWluZzogVGhlIFNTTCBjZXJ0aWZpY2F0ZSBvZiB0aGUgaW5zdGFuY2UgaXMgYmVpbmcgY2hhbmdlZC5cbiAgICAgKiBNYWpvclZlcnNpb25VcGdyYWRpbmc6IFRoZSBtYWpvciB2ZXJzaW9uIG9mIHRoZSBpbnN0YW5jZSBpcyBiZWluZyB1cGdyYWRlZC4gVGhlIGluc3RhbmNlIHJlbWFpbnMgYXZhaWxhYmxlIGR1cmluZyB0aGUgdXBncmFkZS5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlU3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBUaGUgY2F0ZWdvcnkgb2YgdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogVGFpclxuICAgICAqIFJlZGlzXG4gICAgICogTWVtY2FjaGVcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXR3b3JrVHlwZTogVGhlIG5ldHdvcmsgdHlwZSBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDTEFTU0lDOiBjbGFzc2ljIG5ldHdvcmtcbiAgICAgKiBWUEM6IFZpcnR1YWwgUHJpdmF0ZSBDbG91ZCAoVlBDKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpdmF0ZUlwOiBUaGUgcHJpdmF0ZSBJUCBhZGRyZXNzIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcml2YXRlSXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VhcmNoS2V5OiBUaGUga2V5d29yZCB1c2VkIGZvciBmdXp6eSBzZWFyY2guIFRoZSBrZXl3b3JkIGNhbiBiZSBiYXNlZCBvbiBhbiBpbnN0YW5jZSBuYW1lIG9yIGFuIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlYXJjaEtleT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIElEIG9mIHRoZSBWU3dpdGNoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmVJZDogVGhlIHpvbmUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYERBVEFTT1VSQ0U6OlJFRElTOjpJbnN0YW5jZXNgXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZXMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWRzOiBUaGUgbGlzdCBvZiBUaGUgUmVkaXMgaW5zdGFuY2UgSWRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZXM6IFRoZSBsaXN0IG9mIFRoZSBSZWRpcyBpbnN0YW5jZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgREFUQVNPVVJDRTo6UkVESVM6Okluc3RhbmNlc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZXMgPSBuZXcgUm9zSW5zdGFuY2VzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYXJjaGl0ZWN0dXJlVHlwZTogcHJvcHMuYXJjaGl0ZWN0dXJlVHlwZSxcbiAgICAgICAgICAgIGVuZ2luZVZlcnNpb246IHByb3BzLmVuZ2luZVZlcnNpb24sXG4gICAgICAgICAgICBlZGl0aW9uVHlwZTogcHJvcHMuZWRpdGlvblR5cGUsXG4gICAgICAgICAgICB6b25lSWQ6IHByb3BzLnpvbmVJZCxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBpbnN0YW5jZUNsYXNzOiBwcm9wcy5pbnN0YW5jZUNsYXNzLFxuICAgICAgICAgICAgZXhwaXJlZDogcHJvcHMuZXhwaXJlZCxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIHByaXZhdGVJcDogcHJvcHMucHJpdmF0ZUlwLFxuICAgICAgICAgICAgaW5zdGFuY2VTdGF0dXM6IHByb3BzLmluc3RhbmNlU3RhdHVzLFxuICAgICAgICAgICAgY2hhcmdlVHlwZTogcHJvcHMuY2hhcmdlVHlwZSxcbiAgICAgICAgICAgIG5ldHdvcmtUeXBlOiBwcm9wcy5uZXR3b3JrVHlwZSxcbiAgICAgICAgICAgIHNlYXJjaEtleTogcHJvcHMuc2VhcmNoS2V5LFxuICAgICAgICAgICAgZ2xvYmFsSW5zdGFuY2U6IHByb3BzLmdsb2JhbEluc3RhbmNlLFxuICAgICAgICAgICAgaW5zdGFuY2VUeXBlOiBwcm9wcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICBpbnN0YW5jZUlkczogcHJvcHMuaW5zdGFuY2VJZHMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW5zdGFuY2VzO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkcyA9IHJvc0luc3RhbmNlcy5hdHRySW5zdGFuY2VJZHM7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlcyA9IHJvc0luc3RhbmNlcy5hdHRySW5zdGFuY2VzO1xuICAgIH1cbn1cbiJdfQ==