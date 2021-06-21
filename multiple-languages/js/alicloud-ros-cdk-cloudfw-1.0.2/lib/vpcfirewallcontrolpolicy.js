"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcFirewallControlPolicy = exports.VpcFirewallControlPolicyProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cloudfw_generated_1 = require("./cloudfw.generated");
Object.defineProperty(exports, "VpcFirewallControlPolicyProperty", { enumerable: true, get: function () { return cloudfw_generated_1.RosVpcFirewallControlPolicy; } });
/**
 * A ROS resource type:  `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`
 */
class VpcFirewallControlPolicy extends ros.Resource {
    /**
     * Create a new `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosVpcFirewallControlPolicy = new cloudfw_generated_1.RosVpcFirewallControlPolicy(this, id, {
            destination: props.destination,
            applicationName: props.applicationName,
            description: props.description,
            sourceType: props.sourceType,
            destPort: props.destPort,
            aclAction: props.aclAction,
            lang: props.lang,
            destinationType: props.destinationType,
            vpcFirewallId: props.vpcFirewallId,
            source: props.source,
            destPortType: props.destPortType,
            proto: props.proto,
            regionId: props.regionId === undefined || props.regionId === null ? 'cn-hangzhou' : props.regionId,
            newOrder: props.newOrder,
            destPortGroup: props.destPortGroup,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcFirewallControlPolicy;
        this.attrAclUuid = rosVpcFirewallControlPolicy.attrAclUuid;
    }
}
exports.VpcFirewallControlPolicy = VpcFirewallControlPolicy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjZmlyZXdhbGxjb250cm9scG9saWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidnBjZmlyZXdhbGxjb250cm9scG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QywyREFBa0U7QUFFMUIsaUhBRi9CLCtDQUEyQixPQUVvQztBQWlJeEU7O0dBRUc7QUFDSCxNQUFhLHdCQUF5QixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWXREOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0MsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSwrQ0FBMkIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNFLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUNsRyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ3JDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsMkJBQTJCLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRywyQkFBMkIsQ0FBQyxXQUFXLENBQUM7SUFDL0QsQ0FBQztDQUNKO0FBMUNELDREQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1ZwY0ZpcmV3YWxsQ29udHJvbFBvbGljeSB9IGZyb20gJy4vY2xvdWRmdy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NWcGNGaXJld2FsbENvbnRyb2xQb2xpY3kgYXMgVnBjRmlyZXdhbGxDb250cm9sUG9saWN5UHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNMT1VERlc6OlZwY0ZpcmV3YWxsQ29udHJvbFBvbGljeWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWcGNGaXJld2FsbENvbnRyb2xQb2xpY3lQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2xBY3Rpb246IFRoZSBhY3Rpb24gdGhhdCBDbG91ZCBGaXJld2FsbCBwZXJmb3JtcyBvbiB0aGUgdHJhZmZpYy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGFjY2VwdDogYWxsb3dzIHRoZSB0cmFmZmljLlxuICAgICAqIGRyb3A6IGRlbmllcyB0aGUgdHJhZmZpYy5cbiAgICAgKiBsb2c6IG1vbml0b3JzIHRoZSB0cmFmZmljLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjbEFjdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBwbGljYXRpb25OYW1lOiBUaGUgYXBwbGljYXRpb24gdHlwZSB0aGF0IHRoZSBhY2Nlc3MgY29udHJvbCBwb2xpY3kgc3VwcG9ydHMuXG4gICAgICogVmFsaWQgdmFsdWVzOiBcbiAgICAgKiBBTlkgKGluZGljYXRlcyB0aGF0IGFsbCBhcHBsaWNhdGlvbiB0eXBlcyBhcmUgc3VwcG9ydGVkKSBcbiAgICAgKiBGVFAgXG4gICAgICogSFRUUCBcbiAgICAgKiBIVFRQUyBcbiAgICAgKiBNeVNRTCBcbiAgICAgKiBTTVRQIFxuICAgICAqIFNNVFBTIFxuICAgICAqIFJEUCBcbiAgICAgKiBWTkMgXG4gICAgICogU1NIIFxuICAgICAqIFJlZGlzIFxuICAgICAqIE1RVFQgXG4gICAgICogTW9uZ29EQiBcbiAgICAgKiBNZW1jYWNoZSBcbiAgICAgKiBTU0xcbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFjY2VzcyBjb250cm9sIHBvbGljeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdGluYXRpb246IFRoZSBkZXN0aW5hdGlvbiBhZGRyZXNzIGluIHRoZSBhY2Nlc3MgY29udHJvbCBwb2xpY3kuXG4gICAgICogU2V0IHRoaXMgcGFyYW1ldGVyIGluIHRoZSBmb2xsb3dpbmcgd2F5OlxuICAgICAqIElmIHRoZSBEZXN0aW5hdGlvblR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBuZXQsIHNldCB0aGUgdmFsdWUgdG8gYSBDbGFzc2xlc3MgSW50ZXItRG9tYWluIFJvdXRpbmcgKENJRFIpIGJsb2NrLlxuICAgICAqIEV4YW1wbGU6IDEwLjIuMy4wLzI0LlxuICAgICAqIElmIHRoZSBEZXN0aW5hdGlvblR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBncm91cCwgc2V0IHRoZSB2YWx1ZSB0byB0aGUgbmFtZSBvZiBhbiBhZGRyZXNzIGJvb2suXG4gICAgICogRXhhbXBsZTogZGJfZ3JvdXAuXG4gICAgICogSWYgdGhlIERlc3RpbmF0aW9uVHlwZSBwYXJhbWV0ZXIgaXMgc2V0IHRvIGRvbWFpbiwgc2V0IHRoZSB2YWx1ZSB0byBhIGRvbWFpbiBuYW1lLlxuICAgICAqIEV4YW1wbGU6ICouYWxpeXVuY3MuY29tLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RpbmF0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0aW5hdGlvblR5cGU6IFRoZSB0eXBlIG9mIHRoZSBkZXN0aW5hdGlvbiBhZGRyZXNzIGluIHRoZSBhY2Nlc3MgY29udHJvbCBwb2xpY3kuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBuZXQ6IENJRFIgYmxvY2tcbiAgICAgKiBncm91cDogYWRkcmVzcyBib29rXG4gICAgICogZG9tYWluOiBkb21haW4gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RpbmF0aW9uVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV3T3JkZXI6IFRoZSBwcmlvcml0eSBvZiB0aGUgYWNjZXNzIGNvbnRyb2wgcG9saWN5LlxuICAgICAqIFRoZSBwcmlvcml0eSB2YWx1ZSBzdGFydHMgZnJvbSAxLiBBIHNtYWxsZXIgcHJpb3JpdHkgdmFsdWUgaW5kaWNhdGVzIGEgaGlnaGVyIHByaW9yaXR5LlxuICAgICAqIE5vdGUgVGhlIHZhbHVlIG9mIC0xIGluZGljYXRlcyB0aGUgbG93ZXN0IHByaW9yaXR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ld09yZGVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm90bzogVGhlIHR5cGUgb2YgdGhlIHNlY3VyaXR5IHByb3RvY29sIGluIHRoZSBhY2Nlc3MgY29udHJvbCBwb2xpY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvdG86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZTogVGhlIHNvdXJjZSBhZGRyZXNzIGluIHRoZSBhY2Nlc3MgY29udHJvbCBwb2xpY3kuXG4gICAgICogSWYgdGhlIFNvdXJjZVR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBuZXQsIHNldCB0aGUgdmFsdWUgdG8gYSBDSURSIGJsb2NrLiBFeGFtcGxlOiAxMC4yLjMuMC8yNC5cbiAgICAgKiBJZiB0aGUgU291cmNlVHlwZSBwYXJhbWV0ZXIgaXMgc2V0IHRvIGdyb3VwLCBzZXQgdGhlIHZhbHVlIHRvIHRoZSBuYW1lIG9mIGFuIGFkZHJlc3MgYm9vay4gRXhhbXBsZTogZGJfZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzb3VyY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgc291cmNlIGFkZHJlc3MgaW4gdGhlIGFjY2VzcyBjb250cm9sIHBvbGljeS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIG5ldDogQ0lEUiBibG9ja1xuICAgICAqIGdyb3VwOiBhZGRyZXNzIGJvb2tcbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNGaXJld2FsbElkOiBUaGUgSUQgb2YgdGhlIHBvbGljeSBncm91cCB0byB3aGljaCB5b3Ugd2FudCB0byBhZGQgdGhlIGFjY2VzcyBjb250cm9sIHBvbGljeS5cbiAgICAgKiBJZiB0aGUgVlBDIGZpcmV3YWxsIGlzIHVzZWQgdG8gcHJvdGVjdCBDRU4sIHNldCB0aGUgdmFsdWUgdG8gdGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2VcbiAgICAgKiB0aGF0IHRoZSBWUEMgZmlyZXdhbGwgcHJvdGVjdHMuIEV4YW1wbGU6IGNlbi1lcnZ3NWpidzEyMzQqKioqKi5cbiAgICAgKiBJZiB0aGUgVlBDIGZpcmV3YWxsIGlzIHVzZWQgdG8gcHJvdGVjdCBFeHByZXNzIENvbm5lY3QsIHNldCB0aGUgdmFsdWUgdG8gdGhlIElEIG9mXG4gICAgICogdGhlIFZQQyBmaXJld2FsbCBpbnN0YW5jZS4gRXhhbXBsZTogdmZ3LWE0MmJiYjc0OGM5MTIzNCoqKioqLlxuICAgICAqIE5vdGUgWW91IGNhbiBjYWxsIHRoZSBEZXNjcmliZVZwY0ZpcmV3YWxsQWNsR3JvdXBMaXN0IG9wZXJhdGlvbiB0byBxdWVyeSB0aGUgSUQgb2YgdGhlIHBvbGljeSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNGaXJld2FsbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0UG9ydDogVGhlIGRlc3RpbmF0aW9uIHBvcnQgaW4gdGhlIGFjY2VzcyBjb250cm9sIHBvbGljeS5cbiAgICAgKiBOb3RlIFRoaXMgcGFyYW1ldGVyIG11c3QgYmUgc3BlY2lmaWVkIGlmIHRoZSBEZXN0UG9ydFR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBwb3J0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RQb3J0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdFBvcnRHcm91cDogVGhlIGFkZHJlc3MgYm9vayBvZiBkZXN0aW5hdGlvbiBwb3J0cyBpbiB0aGUgYWNjZXNzIGNvbnRyb2wgcG9saWN5LlxuICAgICAqIE5vdGUgVGhpcyBwYXJhbWV0ZXIgbXVzdCBiZSBzcGVjaWZpZWQgaWYgdGhlIERlc3RQb3J0VHlwZSBwYXJhbWV0ZXIgaXMgc2V0IHRvIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RQb3J0R3JvdXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0UG9ydFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBkZXN0aW5hdGlvbiBwb3J0IGluIHRoZSBhY2Nlc3MgY29udHJvbCBwb2xpY3kuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBwb3J0OiBwb3J0XG4gICAgICogZ3JvdXA6IGFkZHJlc3MgYm9va1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RQb3J0VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxhbmc6IFRoZSBuYXR1cmFsIGxhbmd1YWdlIG9mIHRoZSByZXF1ZXN0IGFuZCByZXNwb25zZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHpoOiBDaGluZXNlXG4gICAgICogZW46IEVuZ2xpc2hcbiAgICAgKi9cbiAgICByZWFkb25seSBsYW5nPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVnaW9uSWQ6IFJlZ2lvbiBJRC4gRGVmYXVsdCB0byBjbi1oYW5nemhvdS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q0xPVURGVzo6VnBjRmlyZXdhbGxDb250cm9sUG9saWN5YFxuICovXG5leHBvcnQgY2xhc3MgVnBjRmlyZXdhbGxDb250cm9sUG9saWN5IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBY2xVdWlkOiBUaGUgdW5pcXVlIElEIG9mIHRoZSBhY2Nlc3MgY29udHJvbCBwb2xpY3kuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2xVdWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q0xPVURGVzo6VnBjRmlyZXdhbGxDb250cm9sUG9saWN5YC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBWcGNGaXJld2FsbENvbnRyb2xQb2xpY3lQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NWcGNGaXJld2FsbENvbnRyb2xQb2xpY3kgPSBuZXcgUm9zVnBjRmlyZXdhbGxDb250cm9sUG9saWN5KHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzdGluYXRpb246IHByb3BzLmRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgYXBwbGljYXRpb25OYW1lOiBwcm9wcy5hcHBsaWNhdGlvbk5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzb3VyY2VUeXBlOiBwcm9wcy5zb3VyY2VUeXBlLFxuICAgICAgICAgICAgZGVzdFBvcnQ6IHByb3BzLmRlc3RQb3J0LFxuICAgICAgICAgICAgYWNsQWN0aW9uOiBwcm9wcy5hY2xBY3Rpb24sXG4gICAgICAgICAgICBsYW5nOiBwcm9wcy5sYW5nLFxuICAgICAgICAgICAgZGVzdGluYXRpb25UeXBlOiBwcm9wcy5kZXN0aW5hdGlvblR5cGUsXG4gICAgICAgICAgICB2cGNGaXJld2FsbElkOiBwcm9wcy52cGNGaXJld2FsbElkLFxuICAgICAgICAgICAgc291cmNlOiBwcm9wcy5zb3VyY2UsXG4gICAgICAgICAgICBkZXN0UG9ydFR5cGU6IHByb3BzLmRlc3RQb3J0VHlwZSxcbiAgICAgICAgICAgIHByb3RvOiBwcm9wcy5wcm90byxcbiAgICAgICAgICAgIHJlZ2lvbklkOiBwcm9wcy5yZWdpb25JZCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnJlZ2lvbklkID09PSBudWxsID8gJ2NuLWhhbmd6aG91JyA6IHByb3BzLnJlZ2lvbklkLFxuICAgICAgICAgICAgbmV3T3JkZXI6IHByb3BzLm5ld09yZGVyLFxuICAgICAgICAgICAgZGVzdFBvcnRHcm91cDogcHJvcHMuZGVzdFBvcnRHcm91cCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NWcGNGaXJld2FsbENvbnRyb2xQb2xpY3k7XG4gICAgICAgIHRoaXMuYXR0ckFjbFV1aWQgPSByb3NWcGNGaXJld2FsbENvbnRyb2xQb2xpY3kuYXR0ckFjbFV1aWQ7XG4gICAgfVxufVxuIl19