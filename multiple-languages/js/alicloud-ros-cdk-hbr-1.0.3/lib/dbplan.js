"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbPlan = exports.DbPlanProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const hbr_generated_1 = require("./hbr.generated");
Object.defineProperty(exports, "DbPlanProperty", { enumerable: true, get: function () { return hbr_generated_1.RosDbPlan; } });
/**
 * A ROS resource type:  `ALIYUN::HBR::DbPlan`
 */
class DbPlan extends ros.Resource {
    /**
     * Create a new `ALIYUN::HBR::DbPlan`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDbPlan = new hbr_generated_1.RosDbPlan(this, id, {
            options: props.options,
            instanceUuid: props.instanceUuid,
            sourceType: props.sourceType,
            vaultId: props.vaultId,
            source: props.source,
            continuousPlan: props.continuousPlan,
            incPlan: props.incPlan,
            maxRetrySeconds: props.maxRetrySeconds,
            hostUuid: props.hostUuid,
            cumulativePlan: props.cumulativePlan,
            fullPlan: props.fullPlan,
            logPlan: props.logPlan,
            maxRateLimit: props.maxRateLimit,
            dbPlanName: props.dbPlanName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDbPlan;
        this.attrContinuousPlan = rosDbPlan.attrContinuousPlan;
        this.attrContinuousUuid = rosDbPlan.attrContinuousUuid;
        this.attrCumulativePlan = rosDbPlan.attrCumulativePlan;
        this.attrCumulativeUuid = rosDbPlan.attrCumulativeUuid;
        this.attrDbPlanName = rosDbPlan.attrDbPlanName;
        this.attrFullPlan = rosDbPlan.attrFullPlan;
        this.attrFullUuid = rosDbPlan.attrFullUuid;
        this.attrHostUuid = rosDbPlan.attrHostUuid;
        this.attrIncPlan = rosDbPlan.attrIncPlan;
        this.attrIncUuid = rosDbPlan.attrIncUuid;
        this.attrInstanceUuid = rosDbPlan.attrInstanceUuid;
        this.attrLogPlan = rosDbPlan.attrLogPlan;
        this.attrLogUuid = rosDbPlan.attrLogUuid;
        this.attrMaxRateLimit = rosDbPlan.attrMaxRateLimit;
        this.attrMaxRetrySeconds = rosDbPlan.attrMaxRetrySeconds;
        this.attrOptions = rosDbPlan.attrOptions;
        this.attrPlanId = rosDbPlan.attrPlanId;
        this.attrSourceType = rosDbPlan.attrSourceType;
        this.attrTarget = rosDbPlan.attrTarget;
        this.attrVaultId = rosDbPlan.attrVaultId;
    }
}
exports.DbPlan = DbPlan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJwbGFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGJwbGFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBNEM7QUFFdEIsK0ZBRmIseUJBQVMsT0FFa0I7QUE4RXBDOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEyR3BDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBa0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUM3RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sU0FBUyxHQUFHLElBQUkseUJBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsa0JBQWtCLENBQUM7UUFDdkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLG1CQUFtQixDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztDQUNKO0FBM0pELHdCQTJKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0RiUGxhbiB9IGZyb20gJy4vaGJyLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RiUGxhbiBhcyBEYlBsYW5Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6SEJSOjpEYlBsYW5gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGJQbGFuUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJQbGFuTmFtZTogRGlzcGxheSBuYW1lIG9mIHRoZSBiYWNrdXAgcGxhbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYlBsYW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBob3N0VXVpZDogVXVpZCBvZiB0aGUgaG9zdCBvZiB0aGUgZGF0YWJhc2UgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaG9zdFV1aWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZVR5cGU6IERhdGFiYXNlIHR5cGUsIGFsbG93ZWQgdmFsdWU6IE1ZU1FMLCBPUkFDTEUsIE1TU1FMXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdmF1bHRJZDogVmF1bHQgSUQgdG8gY3JlYXRlIGJhY2t1cCBwbGFuLCB0aGUgYmFja3VwIGRhdGEgd2lsbCBiZSBzdG9yZWQgdG8gdGhlIHZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZhdWx0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnRpbnVvdXNQbGFuOiBDb250aW51b3VzIGJhY2t1cCBwbGFuIHNjaGVkdWxlLiBVc2UgeyAgIFwidHlwZVwiOiBcImNvbnRpbnVvdXNcIiB9LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRpbnVvdXNQbGFuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY3VtdWxhdGl2ZVBsYW46IEN1bXVsYXRpdmUgcGxhbiBzY2hlZHVsZSwgb25seSBmb3IgbXNzcWwuIE1vcmUgZGV0YWlscyBzZWUgRnVsbFBsYW4uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3VtdWxhdGl2ZVBsYW4/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmdWxsUGxhbjogRnVsbCBiYWNrdXAgcGxhbiBzY2hlZHVsZS4gZGFpbHk6IHtcInR5cGVcIjogXCJkYWlseVwiLCBcInN0YXJ0XCI6IFwiMDA6MDA6MDBcIiwgXCJpbnRlcnZhbFwiOiAzfSwgd2Vla2x5IHtcInR5cGVcIjpcIndlZWtseVwiLFwic3RhcnRcIjogXCIwMzowMDowMFwiLFwiZGF5c1wiOiBbMSwyLDMsNCw1XSxcImludGVydmFsXCI6IDF9LCBkYXlzIGNhbiBiZSAwIC0gNiwgMCBtZWFucyBTdW5kYXksIGFuZCBpbnRlcnZhbCBjYW4gYmUgMSAtIDUyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bGxQbGFuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5jUGxhbjogSW5jcmVtZW50YWwgYmFja3VwIHBsYW4gc2NoZWR1bGUuIE9ubHkgZm9yIG15c3FsIGFuZCBvcmFjbGUuIE1vcmUgZGV0YWlscyBzZWUgRnVsbFBsYW4uXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5jUGxhbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlVXVpZDogVXVpZCBvZiBkYXRhYmFzZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZVV1aWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2dQbGFuOiBMb2cgYmFja3VwIHBsYW4gc2NoZWR1bGUuTW9yZSBkZXRhaWxzIHNlZSBGdWxsUGxhbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dQbGFuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWF4UmF0ZUxpbWl0OiBNYXggcmF0ZSBsaW1pdCBmb3IgYmFja3VwIGpvYixcbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhSYXRlTGltaXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXhSZXRyeVNlY29uZHM6IE1heCByZXRyeSBzZWNvbmRzIG9uIG5ldHdvcmsgZmFpbHVyZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhSZXRyeVNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBvcHRpb25zOiBCYWNrdXAgb3B0aW9ucyBpbiBqc29uIGZvcm1hdCwgZGlmZmVyZW50IGZvciBlYWNoIHR5cGUgb2YgZGF0YWJhc2UuIEZvciBPcmFjbGUsIHVzZSB7XCJjaGFubmVsc1wiOjQsXCJjb21wcmVzc2lvblwiOlwibHpvcFwiLFwib2ZmbGluZV9iYWNrdXBcIjpmYWxzZSxcImFyY2hpdmVsb2dfcmVzZXJ2ZV9ob3Vyc1wiOjI0LFwiY3VzdG9tX2NvbW1hbmRzXCI6XCJcIn0sIFwiY2hhbm5lbHNcIiBtZWFucyBudW1iZXJzIG9mIGNvbmN1cnJlbnQgdGhlYWRzLCBcImFyY2hpdmVsb2dfcmVzZXJ2ZV9ob3Vyc1wiIG1lYW5zIGhvdyBsb25nIGJlZm9yZSB0aGUgYXJjaGl2ZSBsb2cgd2lsbCBiZSBkZWxldGVkIGFmdGVyIGJhY2t1cCBqb2IgY29tcGxldGVkLCBvdGhlciBwYXJhbXRlcnMgc2hvdWxkIHVzZSB0aGUgZGVmYXVsdCB2YXVsZS4gRm9yIE15c3FsLCB1c2Uge1wiY2hhbm5lbHNcIjo0LFwiY29tcHJlc3Npb25cIjpcImx6b3BcIixcImRlbF9iaW5sb2dcIjpmYWxzZX0sIFwiZGVsX2JpbmxvZ1wiIG1lYW5zIHdoZXRoZXIgdGhlIGJpbmxvZyB3aWxsIGJlIGRlbGV0ZWQgYWZ0ZXIgYmFja3VwIGNvbXBsZXRlZCwgb25seSB0YWtlIGVmZmVjdCBmb3IgbG9nIG9yIGNvbnRpbnVvdXMgYmFja3VwLiBGb3IgU1FMIFNlcnZlciwgdXNlIHtcXFwiY2hhbm5lbHNcXFwiOjQsXFxcInZlcmlmeVxcXCI6ZmFsc2UsXFxcImNvbXByZXNzaW9uXFxcIjpcXFwibHpvcFxcXCIsXFxcImJhY2t1cF9uZXdfZGF0YWJhc2VzXFxcIjpmYWxzZX0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZTogV2hpY2ggZGF0YWJhc2UgaW5zdGFuY2Ugb3IgZGF0YWJhc2Ugd2lsbCBiZSBiYWNrdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlPzogUm9zRGJQbGFuLlNvdXJjZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpIQlI6OkRiUGxhbmBcbiAqL1xuZXhwb3J0IGNsYXNzIERiUGxhbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29udGludW91c1BsYW46IENvbnRpbnVvdXMgYmFja3VwIHBsYW4gc2NoZWR1bGUuIFVzZSB7ICAgXCJ0eXBlXCI6IFwiY29udGludW91c1wiIH0uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb250aW51b3VzUGxhbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbnRpbnVvdXNVdWlkOiBVdWlkIG9mIGNvbnRpbnVvdXMgYmFja3VwIHBsYW4uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb250aW51b3VzVXVpZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEN1bXVsYXRpdmVQbGFuOiBDdW11bGF0aXZlIHBsYW4gc2NoZWR1bGUsIG9ubHkgZm9yIG1zc3FsLiBNb3JlIGRldGFpbHMgc2VlIEZ1bGxQbGFuLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3VtdWxhdGl2ZVBsYW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDdW11bGF0aXZlVXVpZDogVXVpZCBvZiBjdW11bGF0aXZlIHBsYW4uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdW11bGF0aXZlVXVpZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERiUGxhbk5hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgYmFja3VwIHBsYW4uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYlBsYW5OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRnVsbFBsYW46IEZ1bGwgYmFja3VwIHBsYW4gc2NoZWR1bGUuIGRhaWx5OiB7XCJ0eXBlXCI6IFwiZGFpbHlcIiwgXCJzdGFydFwiOiBcIjAwOjAwOjAwXCIsIFwiaW50ZXJ2YWxcIjogM30sIHdlZWtseSB7XCJ0eXBlXCI6XCJ3ZWVrbHlcIixcInN0YXJ0XCI6IFwiMDM6MDA6MDBcIixcImRheXNcIjogWzEsMiwzLDQsNV0sXCJpbnRlcnZhbFwiOiAxfSwgZGF5cyBjYW4gYmUgMCAtIDYsIDAgbWVhbnMgU3VuZGF5LCBhbmQgaW50ZXJ2YWwgY2FuIGJlIDEgLSA1Mi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZ1bGxQbGFuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRnVsbFV1aWQ6IFV1aWQgb2YgZnVsbCBiYWNrdXAgcGxhbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZ1bGxVdWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSG9zdFV1aWQ6IFV1aWQgb2YgdGhlIGhvc3Qgb2YgdGhlIGRhdGFiYXNlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySG9zdFV1aWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbmNQbGFuOiBJbmNyZW1lbnRhbCBiYWNrdXAgcGxhbiBzY2hlZHVsZS4gT25seSBmb3IgbXlzcWwgYW5kIG9yYWNsZS4gTW9yZSBkZXRhaWxzIHNlZSBGdWxsUGxhbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluY1BsYW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbmNVdWlkOiBVdWlkIG9mIHRoZSBpbmNyZW1lbnRhbCBiYWtjdXAgcGxhbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluY1V1aWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZVV1aWQ6IFV1aWQgb2YgZGF0YWJhc2UgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZVV1aWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMb2dQbGFuOiBMb2cgYmFja3VwIHBsYW4gc2NoZWR1bGUuTW9yZSBkZXRhaWxzIHNlZSBGdWxsUGxhbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvZ1BsYW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMb2dVdWlkOiBVdWlkIG9mIHRoZSBsb2cgYmFja3VwIHBsYW4uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2dVdWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWF4UmF0ZUxpbWl0OiBNYXggcmF0ZSBsaW1pdCBmb3IgYmFja3VwIGpvYixcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1heFJhdGVMaW1pdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1heFJldHJ5U2Vjb25kczogTWF4IHJldHJ5IHNlY29uZHMgb24gbmV0d29yayBmYWlsdXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWF4UmV0cnlTZWNvbmRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3B0aW9uczogQmFja3VwIG9wdGlvbnMgaW4ganNvbiBmb3JtYXQsIGRpZmZlcmVudCBmb3IgZWFjaCB0eXBlIG9mIGRhdGFiYXNlLiBGb3IgT3JhY2xlLCB1c2Uge1wiY2hhbm5lbHNcIjo0LFwiY29tcHJlc3Npb25cIjpcImx6b3BcIixcIm9mZmxpbmVfYmFja3VwXCI6ZmFsc2UsXCJhcmNoaXZlbG9nX3Jlc2VydmVfaG91cnNcIjoyNCxcImN1c3RvbV9jb21tYW5kc1wiOlwiXCJ9LCBcImNoYW5uZWxzXCIgbWVhbnMgbnVtYmVycyBvZiBjb25jdXJyZW50IHRoZWFkcywgXCJhcmNoaXZlbG9nX3Jlc2VydmVfaG91cnNcIiBtZWFucyBob3cgbG9uZyBiZWZvcmUgdGhlIGFyY2hpdmUgbG9nIHdpbGwgYmUgZGVsZXRlZCBhZnRlciBiYWNrdXAgam9iIGNvbXBsZXRlZCwgb3RoZXIgcGFyYW10ZXJzIHNob3VsZCB1c2UgdGhlIGRlZmF1bHQgdmF1bGUuIEZvciBNeXNxbCwgdXNlIHtcImNoYW5uZWxzXCI6NCxcImNvbXByZXNzaW9uXCI6XCJsem9wXCIsXCJkZWxfYmlubG9nXCI6ZmFsc2V9LCBcImRlbF9iaW5sb2dcIiBtZWFucyB3aGV0aGVyIHRoZSBiaW5sb2cgd2lsbCBiZSBkZWxldGVkIGFmdGVyIGJhY2t1cCBjb21wbGV0ZWQsIG9ubHkgdGFrZSBlZmZlY3QgZm9yIGxvZyBvciBjb250aW51b3VzIGJhY2t1cC4gRm9yIFNRTCBTZXJ2ZXIsIHVzZSB7XFxcImNoYW5uZWxzXFxcIjo0LFxcXCJ2ZXJpZnlcXFwiOmZhbHNlLFxcXCJjb21wcmVzc2lvblxcXCI6XFxcImx6b3BcXFwiLFxcXCJiYWNrdXBfbmV3X2RhdGFiYXNlc1xcXCI6ZmFsc2V9LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3B0aW9uczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBsYW5JZDogSWQgb2YgdGhlIGJhY2t1cCBwbGFuLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGxhbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU291cmNlVHlwZTogRGF0YWJhc2UgdHlwZSwgYWxsb3dlZCB2YWx1ZTogTVlTUUwsIE9SQUNMRSwgTVNTUUxcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNvdXJjZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUYXJnZXQ6IFRhcmdldCB2YXVsdCB0byBiYWNrdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYXJnZXQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWYXVsdElkOiBWYXVsdCBJRCB0byBjcmVhdGUgYmFja3VwIHBsYW4sIHRoZSBiYWNrdXAgZGF0YSB3aWxsIGJlIHN0b3JlZCB0byB0aGUgdmF1bHQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWYXVsdElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6SEJSOjpEYlBsYW5gLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERiUGxhblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0RiUGxhbiA9IG5ldyBSb3NEYlBsYW4odGhpcywgaWQsICB7XG4gICAgICAgICAgICBvcHRpb25zOiBwcm9wcy5vcHRpb25zLFxuICAgICAgICAgICAgaW5zdGFuY2VVdWlkOiBwcm9wcy5pbnN0YW5jZVV1aWQsXG4gICAgICAgICAgICBzb3VyY2VUeXBlOiBwcm9wcy5zb3VyY2VUeXBlLFxuICAgICAgICAgICAgdmF1bHRJZDogcHJvcHMudmF1bHRJZCxcbiAgICAgICAgICAgIHNvdXJjZTogcHJvcHMuc291cmNlLFxuICAgICAgICAgICAgY29udGludW91c1BsYW46IHByb3BzLmNvbnRpbnVvdXNQbGFuLFxuICAgICAgICAgICAgaW5jUGxhbjogcHJvcHMuaW5jUGxhbixcbiAgICAgICAgICAgIG1heFJldHJ5U2Vjb25kczogcHJvcHMubWF4UmV0cnlTZWNvbmRzLFxuICAgICAgICAgICAgaG9zdFV1aWQ6IHByb3BzLmhvc3RVdWlkLFxuICAgICAgICAgICAgY3VtdWxhdGl2ZVBsYW46IHByb3BzLmN1bXVsYXRpdmVQbGFuLFxuICAgICAgICAgICAgZnVsbFBsYW46IHByb3BzLmZ1bGxQbGFuLFxuICAgICAgICAgICAgbG9nUGxhbjogcHJvcHMubG9nUGxhbixcbiAgICAgICAgICAgIG1heFJhdGVMaW1pdDogcHJvcHMubWF4UmF0ZUxpbWl0LFxuICAgICAgICAgICAgZGJQbGFuTmFtZTogcHJvcHMuZGJQbGFuTmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEYlBsYW47XG4gICAgICAgIHRoaXMuYXR0ckNvbnRpbnVvdXNQbGFuID0gcm9zRGJQbGFuLmF0dHJDb250aW51b3VzUGxhbjtcbiAgICAgICAgdGhpcy5hdHRyQ29udGludW91c1V1aWQgPSByb3NEYlBsYW4uYXR0ckNvbnRpbnVvdXNVdWlkO1xuICAgICAgICB0aGlzLmF0dHJDdW11bGF0aXZlUGxhbiA9IHJvc0RiUGxhbi5hdHRyQ3VtdWxhdGl2ZVBsYW47XG4gICAgICAgIHRoaXMuYXR0ckN1bXVsYXRpdmVVdWlkID0gcm9zRGJQbGFuLmF0dHJDdW11bGF0aXZlVXVpZDtcbiAgICAgICAgdGhpcy5hdHRyRGJQbGFuTmFtZSA9IHJvc0RiUGxhbi5hdHRyRGJQbGFuTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyRnVsbFBsYW4gPSByb3NEYlBsYW4uYXR0ckZ1bGxQbGFuO1xuICAgICAgICB0aGlzLmF0dHJGdWxsVXVpZCA9IHJvc0RiUGxhbi5hdHRyRnVsbFV1aWQ7XG4gICAgICAgIHRoaXMuYXR0ckhvc3RVdWlkID0gcm9zRGJQbGFuLmF0dHJIb3N0VXVpZDtcbiAgICAgICAgdGhpcy5hdHRySW5jUGxhbiA9IHJvc0RiUGxhbi5hdHRySW5jUGxhbjtcbiAgICAgICAgdGhpcy5hdHRySW5jVXVpZCA9IHJvc0RiUGxhbi5hdHRySW5jVXVpZDtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VVdWlkID0gcm9zRGJQbGFuLmF0dHJJbnN0YW5jZVV1aWQ7XG4gICAgICAgIHRoaXMuYXR0ckxvZ1BsYW4gPSByb3NEYlBsYW4uYXR0ckxvZ1BsYW47XG4gICAgICAgIHRoaXMuYXR0ckxvZ1V1aWQgPSByb3NEYlBsYW4uYXR0ckxvZ1V1aWQ7XG4gICAgICAgIHRoaXMuYXR0ck1heFJhdGVMaW1pdCA9IHJvc0RiUGxhbi5hdHRyTWF4UmF0ZUxpbWl0O1xuICAgICAgICB0aGlzLmF0dHJNYXhSZXRyeVNlY29uZHMgPSByb3NEYlBsYW4uYXR0ck1heFJldHJ5U2Vjb25kcztcbiAgICAgICAgdGhpcy5hdHRyT3B0aW9ucyA9IHJvc0RiUGxhbi5hdHRyT3B0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyUGxhbklkID0gcm9zRGJQbGFuLmF0dHJQbGFuSWQ7XG4gICAgICAgIHRoaXMuYXR0clNvdXJjZVR5cGUgPSByb3NEYlBsYW4uYXR0clNvdXJjZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0clRhcmdldCA9IHJvc0RiUGxhbi5hdHRyVGFyZ2V0O1xuICAgICAgICB0aGlzLmF0dHJWYXVsdElkID0gcm9zRGJQbGFuLmF0dHJWYXVsdElkO1xuICAgIH1cbn1cbiJdfQ==