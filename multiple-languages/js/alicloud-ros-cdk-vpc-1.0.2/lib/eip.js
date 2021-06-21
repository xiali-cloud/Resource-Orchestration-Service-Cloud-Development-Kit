"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eip = exports.EIPProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "EIPProperty", { enumerable: true, get: function () { return vpc_generated_1.RosEIP; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::EIP`
 */
class Eip extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::EIP`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosEIP = new vpc_generated_1.RosEIP(this, id, {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'Postpaid' : props.instanceChargeType,
            pricingCycle: props.pricingCycle === undefined || props.pricingCycle === null ? 'Month' : props.pricingCycle,
            isp: props.isp,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            deletionProtection: props.deletionProtection === undefined || props.deletionProtection === null ? false : props.deletionProtection,
            autoPay: props.autoPay === undefined || props.autoPay === null ? false : props.autoPay,
            name: props.name,
            internetChargeType: props.internetChargeType === undefined || props.internetChargeType === null ? 'PayByBandwidth' : props.internetChargeType,
            netmode: props.netmode,
            bandwidth: props.bandwidth === undefined || props.bandwidth === null ? 5 : props.bandwidth,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEIP;
        this.attrAllocationId = rosEIP.attrAllocationId;
        this.attrEipAddress = rosEIP.attrEipAddress;
        this.attrIsp = rosEIP.attrIsp;
        this.attrOrderId = rosEIP.attrOrderId;
    }
}
exports.Eip = Eip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWlwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBeUM7QUFFdEIsNEZBRlYsc0JBQU0sT0FFZTtBQTZFOUI7O0dBRUc7QUFDSCxNQUFhLEdBQUksU0FBUSxHQUFHLENBQUMsUUFBUTtJQTJCakM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFrQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGtCQUFrQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCO1lBQ3ZJLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUM1RyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDOUUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7WUFDbEksT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ3RGLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCO1lBQzdJLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDMUYsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDMUMsQ0FBQztDQUNKO0FBMURELGtCQTBEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0VJUCB9IGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0VJUCBhcyBFSVBQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpFSVBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRUlQUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1BheTogQXV0b21hdGljIFBheW1lbnQuIERlZmF1bHQgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1BheT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBiYW5kd2lkdGg6IEJhbmR3aWR0aCBmb3IgdGhlIG91dHB1dCBuZXR3b3JrLiBEZWZhdWx0IGlzIDVNQi5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGg/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxldGlvblByb3RlY3Rpb246IFdoZXRoZXIgdG8gZW5hYmxlIGRlbGV0aW9uIHByb3RlY3Rpb24uXG4gICAgICogRGVmYXVsdCB0byBGYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvblByb3RlY3Rpb24/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IE9wdGlvbmFsLiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIEVJUC4gVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci4gSXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyAgb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUNoYXJnZVR5cGU6IFRoZSByZXNvdXJjZSBjaGFyZ2UgdHlwZS4gRGVmYXVsdCB2YWx1ZSBpcyBQb3N0cGFpZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlQ2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogVGhlIG5ldHdvcmsgY2hhcmdlIHR5cGUuIFN1cHBvcnQgJ1BheUJ5QmFuZHdpZHRoJyBhbmQgJ1BheUJ5VHJhZmZpYycgb25seS4gRGVmYXVsdCBpcyBQYXlCeUJhbmR3aWR0aC4gUGF5QnlUcmFmZmljIHdpbGwgY2hhcmdlIGJ5IGhvdXIsIFBheUJ5QmFuZHdpZHRoIHdpbGwgY2hhcmdlIGJ5IGRheS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldENoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpc3A6IFRoZSBsaW5lIHR5cGUuIFlvdSBjYW4gc2V0IHRoaXMgcGFyYW1ldGVyIG9ubHkgd2hlbiB5b3UgY3JlYXRlIGEgcGF5LWFzLXlvdS1nbyBFSVAuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBCR1A6IEJHUCAoTXVsdGktSVNQKSBsaW5lcy4gVXAgdG8gODkgaGlnaC1xdWFsaXR5IEJHUCBsaW5lcyBhcmUgYXZhaWxhYmxlIHdvcmxkd2lkZS4gRGlyZWN0IGNvbm5lY3Rpb25zIHdpdGggbXVsdGlwbGUgSW50ZXJuZXQgU2VydmljZSBQcm92aWRlcnMgKElTUHMpLCBpbmNsdWRpbmcgVGVsZWNvbSwgVW5pY29tLCBNb2JpbGUsIFJhaWxjb20sIE5ldGNvbSwgQ0VSTkVULCBDaGluYSBCcm9hZGNhc3QgTmV0d29yaywgRHIuIFBlbmcsIGFuZCBGb3VuZGVyLCBjYW4gYmUgZXN0YWJsaXNoZWQgaW4gYWxsIHJlZ2lvbnMgaW4gbWFpbmxhbmQgQ2hpbmEuXG4gICAgICogQkdQX1BSTzogQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lcy4gQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lcyBvcHRpbWl6ZSBkYXRhIHRyYW5zbWlzc2lvbiB0byBDaGluYSBhbmQgaW1wcm92ZSBjb25uZWN0aW9uIHF1YWxpdHkgZm9yIGludGVybmF0aW9uYWwgc2VydmljZXMuIENvbXBhcmVkIHdpdGggdHJhZGl0aW9uYWwgQkdQIChNdWx0aS1JU1ApIGxpbmVzLCBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzIGNhbiBiZSB1c2VkIHRvIGVzdGFibGlzaCBkaXJlY3QgY29ubmVjdGlvbnMgd2l0aG91dCB1c2luZyBpbnRlcm5hdGlvbmFsIElTUCBzZXJ2aWNlcy4gVGhlcmVmb3JlLCBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzIHJlZHVjZSBuZXR3b3JrIGxhdGVuY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIEVJUC4gVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gIG9yIGh0dHBzOi8vXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5ldG1vZGU6IFRoZSBuZXR3b3JrIHR5cGUuIFZhbGlkIHZhbHVlOiBwdWJsaWMgKHB1YmxpYyBuZXR3b3JrKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXRtb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBQcmVwYWlkIHRpbWUgcGVyaW9kLiBXaGlsZSBjaG9vc2UgYnkgcGF5IGJ5IG1vbnRoLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gOSBvciAxMiwgMjQsIDM2LiBcbiAgICAgKiAgIFdoaWxlIGNob29zZSBwYXkgYnkgeWVhciwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpY2luZ0N5Y2xlOiBQcmljZSBjeWNsZSBvZiB0aGUgcmVzb3VyY2UuIFRoaXMgcHJvcGVydHkgaGFzIG5vIGRlZmF1bHQgdmFsdWUuIElmIENoYXJnZVR5cGUgaXMgc3BlY2lmaWVkIGFzIFBvc3RwYWlkLCB0aGlzIHZhbHVlIHdpbGwgYmUgaWdub3JlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaWNpbmdDeWNsZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gZWlwLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGVpcC4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NFSVAuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlZQQzo6RUlQYFxuICovXG5leHBvcnQgY2xhc3MgRWlwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBbGxvY2F0aW9uSWQ6IElEIHRoYXQgQWxpeXVuIGFzc2lnbnMgdG8gcmVwcmVzZW50IHRoZSBhbGxvY2F0aW9uIG9mIHRoZSBhZGRyZXNzIGZvciB1c2Ugd2l0aCBWUEMuIFJldHVybmVkIG9ubHkgZm9yIFZQQyBlbGFzdGljIElQIGFkZHJlc3Nlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsbG9jYXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEVpcEFkZHJlc3M6IElQIGFkZHJlc3Mgb2YgY3JlYXRlZCBFSVAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFaXBBZGRyZXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSXNwOiBUaGUgbGluZSB0eXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXNwOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3JkZXJJZDogT3JkZXIgSUQgb2YgcHJlcGFpZCBFSVAgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpFSVBgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEVJUFByb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zRUlQID0gbmV3IFJvc0VJUCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgaW5zdGFuY2VDaGFyZ2VUeXBlOiBwcm9wcy5pbnN0YW5jZUNoYXJnZVR5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5pbnN0YW5jZUNoYXJnZVR5cGUgPT09IG51bGwgPyAnUG9zdHBhaWQnIDogcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgcHJpY2luZ0N5Y2xlOiBwcm9wcy5wcmljaW5nQ3ljbGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5wcmljaW5nQ3ljbGUgPT09IG51bGwgPyAnTW9udGgnIDogcHJvcHMucHJpY2luZ0N5Y2xlLFxuICAgICAgICAgICAgaXNwOiBwcm9wcy5pc3AsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBlcmlvZCA9PT0gbnVsbCA/IDEgOiBwcm9wcy5wZXJpb2QsXG4gICAgICAgICAgICBkZWxldGlvblByb3RlY3Rpb246IHByb3BzLmRlbGV0aW9uUHJvdGVjdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmRlbGV0aW9uUHJvdGVjdGlvbiA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uLFxuICAgICAgICAgICAgYXV0b1BheTogcHJvcHMuYXV0b1BheSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmF1dG9QYXkgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmF1dG9QYXksXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICAgICAgaW50ZXJuZXRDaGFyZ2VUeXBlOiBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGUgPT09IG51bGwgPyAnUGF5QnlCYW5kd2lkdGgnIDogcHJvcHMuaW50ZXJuZXRDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgbmV0bW9kZTogcHJvcHMubmV0bW9kZSxcbiAgICAgICAgICAgIGJhbmR3aWR0aDogcHJvcHMuYmFuZHdpZHRoID09PSB1bmRlZmluZWQgfHwgcHJvcHMuYmFuZHdpZHRoID09PSBudWxsID8gNSA6IHByb3BzLmJhbmR3aWR0aCxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRUlQO1xuICAgICAgICB0aGlzLmF0dHJBbGxvY2F0aW9uSWQgPSByb3NFSVAuYXR0ckFsbG9jYXRpb25JZDtcbiAgICAgICAgdGhpcy5hdHRyRWlwQWRkcmVzcyA9IHJvc0VJUC5hdHRyRWlwQWRkcmVzcztcbiAgICAgICAgdGhpcy5hdHRySXNwID0gcm9zRUlQLmF0dHJJc3A7XG4gICAgICAgIHRoaXMuYXR0ck9yZGVySWQgPSByb3NFSVAuYXR0ck9yZGVySWQ7XG4gICAgfVxufVxuIl19