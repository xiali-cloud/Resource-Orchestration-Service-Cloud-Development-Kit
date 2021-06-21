"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logstore = exports.LogstoreProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sls_generated_1 = require("./sls.generated");
Object.defineProperty(exports, "LogstoreProperty", { enumerable: true, get: function () { return sls_generated_1.RosLogstore; } });
/**
 * A ROS resource type:  `ALIYUN::SLS::Logstore`
 */
class Logstore extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosLogstore = new sls_generated_1.RosLogstore(this, id, {
            logstoreName: props.logstoreName,
            preserveStorage: props.preserveStorage === undefined || props.preserveStorage === null ? false : props.preserveStorage,
            projectName: props.projectName,
            appendMeta: props.appendMeta === undefined || props.appendMeta === null ? false : props.appendMeta,
            maxSplitShard: props.maxSplitShard,
            autoSplit: props.autoSplit === undefined || props.autoSplit === null ? false : props.autoSplit,
            enableTracking: props.enableTracking === undefined || props.enableTracking === null ? false : props.enableTracking,
            ttl: props.ttl === undefined || props.ttl === null ? 30 : props.ttl,
            shardCount: props.shardCount === undefined || props.shardCount === null ? 2 : props.shardCount,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLogstore;
        this.attrLogstoreName = rosLogstore.attrLogstoreName;
    }
}
exports.Logstore = Logstore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBbUV4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWXRDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sV0FBVyxHQUFHLElBQUksMkJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWUsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWU7WUFDdEgsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUNsRyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQzlGLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYztZQUNsSCxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDbkUsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVO1NBQ2pHLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7SUFDekQsQ0FBQztDQUNKO0FBcENELDRCQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0xvZ3N0b3JlIH0gZnJvbSAnLi9zbHMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTG9nc3RvcmUgYXMgTG9nc3RvcmVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0xTOjpMb2dzdG9yZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2dzdG9yZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvZ3N0b3JlTmFtZTogTG9nc3RvcmUgbmFtZTpcbiAgICAgKiAxLiBPbmx5IHN1cHBvcnRzIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIDIuIE11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBudW1iZXJzLlxuICAgICAqIDMuIFRoZSBuYW1lIGxlbmd0aCBpcyAzLTYzIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nc3RvcmVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm9qZWN0TmFtZTogUHJvamVjdCBuYW1lOlxuICAgICAqIDEuIE9ubHkgc3VwcG9ydHMgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogMi4gTXVzdCBzdGFydCBhbmQgZW5kIHdpdGggbG93ZXJjYXNlIGxldHRlcnMgYW5kIG51bWJlcnMuXG4gICAgICogMy4gVGhlIG5hbWUgbGVuZ3RoIGlzIDMtNjMgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBwZW5kTWV0YTogV2hldGhlciB0byBhZGQgY2xpZW50IGV4dGVybmFsIG5ldHdvcmsgSVAgYW5kIGxvZyBhcnJpdmFsIHRpbWUgYWZ0ZXIgcmVjZWl2aW5nIHRoZSBsb2cuXG4gICAgICogRGVmYXVsdCB0byBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBlbmRNZXRhPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9TcGxpdDogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IHNwbGl0IHRoZSBzaGFyZC5cbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9TcGxpdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVUcmFja2luZzogV2hldGhlciB0byBlbmFibGUgV2ViVHJhY2tpbmcsIHdoaWNoIHN1cHBvcnRzIGZhc3QgY2FwdHVyZSBvZiB2YXJpb3VzIGJyb3dzZXJzIGFuZCBpT1MvQW5kcm9pZC9BUFAgYWNjZXNzIGluZm9ybWF0aW9uLlxuICAgICAqIERlZmF1bHQgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlVHJhY2tpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWF4U3BsaXRTaGFyZDogVGhlIG1heGltdW0gbnVtYmVyIG9mIHNoYXJkcyB3aGVuIHNwbGl0dGluZyBhdXRvbWF0aWNhbGx5LiBNdXN0IGJlIHNwZWNpZmllZCBpZiBBdXRvU3BsaXQgaXMgc2V0IHRvIHRydWUuXG4gICAgICogQWxsb3dlZCBWYWx1ZXM6IDEtNjQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4U3BsaXRTaGFyZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByZXNlcnZlU3RvcmFnZTogV2hldGhlciB0byBrZWVwIHRoZSBsb2cgcGVybWFuZW50bHkuXG4gICAgICogSWYgc2V0IHRvIHRydWUsIFRUTCB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogRGVmYXVsdCB0byBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmVzZXJ2ZVN0b3JhZ2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2hhcmRDb3VudDogVGhlIG51bWJlciBvZiBTaGFyZHMuXG4gICAgICogQWxsb3dlZCBWYWx1ZXM6IDEtMTAwLCBkZWZhdWx0IHRvIDIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2hhcmRDb3VudD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHR0bDogVGhlIGxpZmVjeWNsZSBvZiBsb2cgaW4gdGhlIGxvZ3N0b3JlIGluIGRheXMuXG4gICAgICogQWxsb3dlZCBWYWx1ZXM6IDEtMzYwMCwgZGVmYXVsdCB0byAzMC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0dGw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlNMUzo6TG9nc3RvcmVgXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dzdG9yZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTG9nc3RvcmVOYW1lOiBMb2dzdG9yZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9nc3RvcmVOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xTOjpMb2dzdG9yZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTG9nc3RvcmVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NMb2dzdG9yZSA9IG5ldyBSb3NMb2dzdG9yZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGxvZ3N0b3JlTmFtZTogcHJvcHMubG9nc3RvcmVOYW1lLFxuICAgICAgICAgICAgcHJlc2VydmVTdG9yYWdlOiBwcm9wcy5wcmVzZXJ2ZVN0b3JhZ2UgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5wcmVzZXJ2ZVN0b3JhZ2UgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLnByZXNlcnZlU3RvcmFnZSxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9wcy5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIGFwcGVuZE1ldGE6IHByb3BzLmFwcGVuZE1ldGEgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5hcHBlbmRNZXRhID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5hcHBlbmRNZXRhLFxuICAgICAgICAgICAgbWF4U3BsaXRTaGFyZDogcHJvcHMubWF4U3BsaXRTaGFyZCxcbiAgICAgICAgICAgIGF1dG9TcGxpdDogcHJvcHMuYXV0b1NwbGl0ID09PSB1bmRlZmluZWQgfHwgcHJvcHMuYXV0b1NwbGl0ID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5hdXRvU3BsaXQsXG4gICAgICAgICAgICBlbmFibGVUcmFja2luZzogcHJvcHMuZW5hYmxlVHJhY2tpbmcgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5lbmFibGVUcmFja2luZyA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuZW5hYmxlVHJhY2tpbmcsXG4gICAgICAgICAgICB0dGw6IHByb3BzLnR0bCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnR0bCA9PT0gbnVsbCA/IDMwIDogcHJvcHMudHRsLFxuICAgICAgICAgICAgc2hhcmRDb3VudDogcHJvcHMuc2hhcmRDb3VudCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnNoYXJkQ291bnQgPT09IG51bGwgPyAyIDogcHJvcHMuc2hhcmRDb3VudCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NMb2dzdG9yZTtcbiAgICAgICAgdGhpcy5hdHRyTG9nc3RvcmVOYW1lID0gcm9zTG9nc3RvcmUuYXR0ckxvZ3N0b3JlTmFtZTtcbiAgICB9XG59XG4iXX0=