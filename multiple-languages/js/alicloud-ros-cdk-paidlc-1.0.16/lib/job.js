"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = exports.JobProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const paidlc_generated_1 = require("./paidlc.generated");
Object.defineProperty(exports, "JobProperty", { enumerable: true, get: function () { return paidlc_generated_1.RosJob; } });
/**
 * A ROS resource type:  `ALIYUN::PAIDLC::Job`
 */
class Job extends ros.Resource {
    /**
     * Create a new `ALIYUN::PAIDLC::Job`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosJob = new paidlc_generated_1.RosJob(this, id, {
            thirdpartyLibs: props.thirdpartyLibs,
            options: props.options,
            priority: props.priority,
            envs: props.envs,
            jobMaxRunningTimeMinutes: props.jobMaxRunningTimeMinutes,
            workspaceId: props.workspaceId,
            codeSource: props.codeSource,
            userVpc: props.userVpc,
            jobSpecs: props.jobSpecs,
            userCommand: props.userCommand,
            dataSources: props.dataSources,
            jobType: props.jobType,
            resourceId: props.resourceId,
            thirdpartyLibDir: props.thirdpartyLibDir,
            displayName: props.displayName,
            successPolicy: props.successPolicy,
            settings: props.settings,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosJob;
        this.attrJobId = rosJob.attrJobId;
    }
}
exports.Job = Job;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiam9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5Qyx5REFBNEM7QUFFekIsNEZBRlYseUJBQU0sT0FFZTtBQXNHOUI7O0dBRUc7QUFDSCxNQUFhLEdBQUksU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlqQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWUsRUFBRSxtQ0FBMkMsSUFBSTtRQUMxRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sTUFBTSxHQUFHLElBQUkseUJBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ2pDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQix3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1lBQ3hELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUMzQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBNUNELGtCQTRDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0pvYiB9IGZyb20gJy4vcGFpZGxjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0pvYiBhcyBKb2JQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UEFJRExDOjpKb2JgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSm9iUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGlzcGxheU5hbWU6IFRoZSBuYW1lIG9mIHRoZSB0YXNrIGlzIGFzIGZvbGxvd3M6XG4gICAgICogVGhlIG5hbWUgbGVuZ3RoIGRvZXMgbm90IGV4Y2VlZCAyNTYgY2hhcmFjdGVycy5cbiAgICAgKiBBbGxvdyBudW1iZXJzLCBsZXR0ZXJzLCBsb3dlciBzdHJva2VzIChfKSwgRW5nbGlzaCBwZXJpb2QgKC4pIEFuZCBzaG9ydCBob3Jpem9udGFsIGxpbmVzICgtKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNwbGF5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgam9iU3BlY3M6IEpvYnNwZWNzIGRlc2NyaWJlcyB2YXJpb3VzIGNvbmZpZ3VyYXRpb25zIG9mIHRhc2tzIGR1cmluZyB0aGUgbWlzc2lvbiwgc3VjaCBhcyBtaXJyb3IgYWRkcmVzcywgc3RhcnQgY29tbWFuZCwgbm9kZSByZXNvdXJjZSBzdGF0ZW1lbnQsIG51bWJlciBvZiBjb3BpZXMsIGV0Yy5cbiAgICAgKiBUaGUgRExDIHRhc2sgY29uc2lzdHMgb2YgZGlmZmVyZW50IHR5cGVzIG9mIG5vZGVzLiBUaGUgc2FtZSB0eXBlIG9mIG5vZGVzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBjb25maWd1cmF0aW9uLiBUaGlzIGNvbmZpZ3VyYXRpb24gaXMgY2FsbGVkIGEgSm9ic3BlYy4gSm9ic3BlY3MgZGVzY3JpYmVzIHRoZSBjb25maWd1cmF0aW9uIG9mIGFsbCB0eXBlcyBvZiBub2RlcyBhbmQgaXMgdGhlIGFycmF5IG9mIEpvYnNwZWMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgam9iU3BlY3M6IEFycmF5PFJvc0pvYi5Kb2JTcGVjc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGpvYlR5cGU6IFRoZSB0eXBlIG9mIGpvYi4gVmFsdWVzOiBURkpvYiwgUHlUb3JjaEpvYiwgWEdCb29zdEpvYiwgT25lRmxvd0pvYiwgRWxhc3RpY0JhdGNoXG4gICAgICovXG4gICAgcmVhZG9ubHkgam9iVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlckNvbW1hbmQ6IFN0YXJ0IGNvbW1hbmRzIG9mIGFsbCBub2RlcyBpbiB0aGUgdGFzay5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyQ29tbWFuZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya3NwYWNlSWQ6IFdvcmsgc3BhY2UgSUQsIGhvdyB0byBnZXQgd29ya2luZyBzcGFjZSBJRCwgc2VlIGxpc3R3b3JrU3BhY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtzcGFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb2RlU291cmNlOiBUaGUgY29kZSBzb3VyY2UgdXNlZCBpbiB0aGlzIHRhc2suQmVmb3JlIHRoZSBtaXNzaW9uIG5vZGUgc3RhcnRzLCB0aGUgRExDIHdpbGwgYXV0b21hdGljYWxseSBkb3dubG9hZCB0aGUgY29kZSBjb25maWd1cmVkIGluIHRoZSBjb2RlIHNvdXJjZSwgYW5kIG1vdW50IHRvIHRoZSBsb2NhbCBkaXJlY3Rvcnkgb2YgdGhlIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb2RlU291cmNlPzogUm9zSm9iLkNvZGVTb3VyY2VQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRhdGFTb3VyY2VzOiBMaXN0IG9mIGRhdGEgc291cmNlIHVzZWQgZm9yIHRhc2sgb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFTb3VyY2VzPzogQXJyYXk8Um9zSm9iLkRhdGFTb3VyY2VzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW52czogRW52aXJvbm1lbnQgdmFyaWFibGUgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbnZzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgam9iTWF4UnVubmluZ1RpbWVNaW51dGVzOiBUaGUgbG9uZ2VzdCBydW5uaW5nIHRpbWUgaXMgcnVubmluZywgYW5kIHRoZSB1bml0IGlzIG1pbnV0ZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgam9iTWF4UnVubmluZ1RpbWVNaW51dGVzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3B0aW9uczogVGhlIGFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBvZiB0aGlzIHRhc2sgY2FuIGFkanVzdCBzb21lIG9mIHRoZSBiZWhhdmlvciBvZiB0aGUgbW91bnRpbmcgZGF0YSBzb3VyY2UgdGhyb3VnaCB0aGlzIHBhcmFtZXRlci5JZiB0aGUgdGFzayBoYXMgYSBkYXRhIHNvdXJjZSB0aGF0IG1vdW50ZWQgdGhlIE9TUyB0eXBlLCB5b3UgY2FuIGNvdmVyIHRoZSBkZWZhdWx0IHBhcmFtZXRlcnMgb2YgdGhlIGppbm9mcyBieSBjb25maWd1cmUgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhpcyBwYXJhbWV0ZXIgdG8gZnMuT1NTLkRPV05MT0FELkNPTkNVUlJFTkNZID0gNCwgZnMub3NzLmRvd25sb2FkLnF1ZXVlLnNpemUgPSAxNi5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpb3JpdHk6IFRoZSBwcmlvcml0eSBvZiB0aGUgdGFzaywgb3B0aW9uYWwgcGFyYW1ldGVyLCBkZWZhdWx0IHZhbHVlIDEsIHRoZSByYW5nZSBvZiBwYXJhbWV0ZXIgdmFsdWVzIGlzIDEgfiA5LmluOlxuICAgICAqIDEgaXMgdGhlIG1pbmltdW0gcHJpb3JpdHkuXG4gICAgICogOSBpcyB0aGUgaGlnaGVzdCBwcmlvcml0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmlvcml0eT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlSWQ6IFJlc291cmNlIGdyb3VwIElELCBvcHRpb25hbCBwYXJhbWV0ZXIuXG4gICAgICogVGhlIHBhcmFtZXRlciB2YWx1ZSBpcyBlbXB0eSBpbmRpY2F0aW5nIHRoYXQgc3VibWl0dGVkIHRvIHRoZSBwdWJsaWMgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICogSWYgdGhlIGN1cnJlbnQgd29ya2luZyBzcGFjZSBoYXMgYmVlbiBib3VuZCB0byBhIHByb3ByaWV0YXJ5IHJlc291cmNlIGdyb3VwLCB5b3UgY2FuIHNwZWNpZnkgdGhlIGNvcnJlc3BvbmRpbmcgcmVzb3VyY2UgZ3JvdXAgSUQgaGVyZTsgaG93IHRvIGNyZWF0ZSBhIHByb3ByaWV0YXJ5IHJlc291cmNlIGdyb3VwIGFuZCBpbnF1aXJlIGFib3V0IHRoZSBwcm9wcmlldGFyeSByZXNvdXJjZSBncm91cCBJRCwgcGxlYXNlIHJlZmVyIHRvIHRoZSBwcmVwYXJhdGlvbiBhbmQgbWFuYWdlbWVudCBvZiB0aGUgRExDIHJlc291cmNlIGdyb3VwIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNldHRpbmdzOiBKb2Igc2V0dGluZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2V0dGluZ3M/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdWNjZXNzUG9saWN5OiBUaGUgc3VjY2Vzc2Z1bCBzdHJhdGVneSBvZiBkaXN0cmlidXRlZCBtdWx0aSAtbWFjaGluZSB0YXNrcyBpcyBjdXJyZW50bHkgb25seSBzdXBwb3J0ZWQgYnkgVGVuc29yRmxvdydzIG11bHRpIC1tYWNoaW5lIHRhc2suXG4gICAgICogQ2hpZWZXb3JrZXI6IFdoZW4gaXQgaXMgc3BlY2lmaWVkIGFzIHRoaXMgdmFsdWUsIGFzIGxvbmcgYXMgdGhlIENoaWVmJ3MgUE9EIGlzIHN1Y2Nlc3NmdWwsIGl0IGlzIGNvbnNpZGVyZWQgdGhhdCB0aGUgZW50aXJlIHRhc2sgaXMgc3VjY2Vzc2Z1bC5cbiAgICAgKiBBbGwgd29ya2VyczogQWxsIHdvcmtlcnMgbXVzdCBiZSBzdWNjZXNzZnVsIHRvIHRoaW5rIHRoYXQgdGhlIGVudGlyZSB0YXNrIGlzIHN1Y2Nlc3NmdWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3VjY2Vzc1BvbGljeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRoaXJkcGFydHlMaWJEaXI6IFRoZSBuYW1lIGZvbGRlciBvZiB0aGUgUmVxdWlyZW1lbnRzLnR4dCBmaWxlIGlzIGxvY2F0ZWQ7IGJlZm9yZSBlYWNoIG5vZGUgcnVucyB0aGUgc3BlY2lmaWVkIHVzZXJjb21tYW5kLCBQQUkgLURMQyB3aWxsIHRha2UgdGhlIHJlcXVpcmVtZW50cy50eHQgZmlsZSBmcm9tIHRoZSBzcGVjaWZpZWQgZm9sZGVyIGFuZCBjYWxsIHRoZSBQSVAgSW5zdGFsbCAtUiBpbnN0YWxsYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGhpcmRwYXJ0eUxpYkRpcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRoaXJkcGFydHlMaWJzOiBQeXRob24gdGhpcmQtcGFydHkgbGlicmFyeSBsaXN0IHRvIGJlIGluc3RhbGxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aGlyZHBhcnR5TGlicz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VyVnBjOiBVc2VyIFZQQyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJWcGM/OiBSb3NKb2IuVXNlclZwY1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpQQUlETEM6OkpvYmBcbiAqL1xuZXhwb3J0IGNsYXNzIEpvYiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSm9iSWQ6IFRoZSB0YXNrIElEIGNyZWF0ZWQgdGhpcyB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySm9iSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpQQUlETEM6OkpvYmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSm9iUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zSm9iID0gbmV3IFJvc0pvYih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHRoaXJkcGFydHlMaWJzOiBwcm9wcy50aGlyZHBhcnR5TGlicyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHByb3BzLm9wdGlvbnMsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJvcHMucHJpb3JpdHksXG4gICAgICAgICAgICBlbnZzOiBwcm9wcy5lbnZzLFxuICAgICAgICAgICAgam9iTWF4UnVubmluZ1RpbWVNaW51dGVzOiBwcm9wcy5qb2JNYXhSdW5uaW5nVGltZU1pbnV0ZXMsXG4gICAgICAgICAgICB3b3Jrc3BhY2VJZDogcHJvcHMud29ya3NwYWNlSWQsXG4gICAgICAgICAgICBjb2RlU291cmNlOiBwcm9wcy5jb2RlU291cmNlLFxuICAgICAgICAgICAgdXNlclZwYzogcHJvcHMudXNlclZwYyxcbiAgICAgICAgICAgIGpvYlNwZWNzOiBwcm9wcy5qb2JTcGVjcyxcbiAgICAgICAgICAgIHVzZXJDb21tYW5kOiBwcm9wcy51c2VyQ29tbWFuZCxcbiAgICAgICAgICAgIGRhdGFTb3VyY2VzOiBwcm9wcy5kYXRhU291cmNlcyxcbiAgICAgICAgICAgIGpvYlR5cGU6IHByb3BzLmpvYlR5cGUsXG4gICAgICAgICAgICByZXNvdXJjZUlkOiBwcm9wcy5yZXNvdXJjZUlkLFxuICAgICAgICAgICAgdGhpcmRwYXJ0eUxpYkRpcjogcHJvcHMudGhpcmRwYXJ0eUxpYkRpcixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm9wcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIHN1Y2Nlc3NQb2xpY3k6IHByb3BzLnN1Y2Nlc3NQb2xpY3ksXG4gICAgICAgICAgICBzZXR0aW5nczogcHJvcHMuc2V0dGluZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSm9iO1xuICAgICAgICB0aGlzLmF0dHJKb2JJZCA9IHJvc0pvYi5hdHRySm9iSWQ7XG4gICAgfVxufVxuIl19