"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenRouteMap = exports.CenRouteMapProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cen_generated_1 = require("./cen.generated");
Object.defineProperty(exports, "CenRouteMapProperty", { enumerable: true, get: function () { return cen_generated_1.RosCenRouteMap; } });
/**
 * A ROS resource type:  `ALIYUN::CEN::CenRouteMap`
 */
class CenRouteMap extends ros.Resource {
    /**
     * Create a new `ALIYUN::CEN::CenRouteMap`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCenRouteMap = new cen_generated_1.RosCenRouteMap(this, id, {
            description: props.description,
            sourceInstanceIdsReverseMatch: props.sourceInstanceIdsReverseMatch,
            transmitDirection: props.transmitDirection,
            matchCommunitySet: props.matchCommunitySet,
            cenRegionId: props.cenRegionId,
            sourceRouteTableIds: props.sourceRouteTableIds,
            destinationInstanceIds: props.destinationInstanceIds,
            destinationInstanceIdsReverseMatch: props.destinationInstanceIdsReverseMatch,
            sourceInstanceIds: props.sourceInstanceIds,
            destinationRouteTableIds: props.destinationRouteTableIds,
            destinationCidrBlocks: props.destinationCidrBlocks,
            operateCommunitySet: props.operateCommunitySet,
            destinationChildInstanceTypes: props.destinationChildInstanceTypes,
            priority: props.priority,
            sourceChildInstanceTypes: props.sourceChildInstanceTypes,
            asPathMatchMode: props.asPathMatchMode,
            cidrMatchMode: props.cidrMatchMode,
            mapResult: props.mapResult,
            routeTypes: props.routeTypes,
            preference: props.preference,
            communityOperateMode: props.communityOperateMode,
            cenId: props.cenId,
            nextPriority: props.nextPriority,
            prependAsPath: props.prependAsPath,
            communityMatchMode: props.communityMatchMode,
            matchAsns: props.matchAsns,
            sourceRegionIds: props.sourceRegionIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenRouteMap;
        this.attrRouteMapId = rosCenRouteMap.attrRouteMapId;
    }
}
exports.CenRouteMap = CenRouteMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Vucm91dGVtYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZW5yb3V0ZW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQTZMOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQVl6Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLDZCQUE2QjtZQUNsRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtZQUNwRCxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsa0NBQWtDO1lBQzVFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QjtZQUN4RCxxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLDZCQUE2QjtZQUNsRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QjtZQUN4RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1NBQ3pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQztJQUN4RCxDQUFDO0NBQ0o7QUF0REQsa0NBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ2VuUm91dGVNYXAgfSBmcm9tICcuL2Nlbi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDZW5Sb3V0ZU1hcCBhcyBDZW5Sb3V0ZU1hcFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDRU46OkNlblJvdXRlTWFwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENlblJvdXRlTWFwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ2xvdWQgRW50ZXJwcmlzZSBOZXR3b3JrIChDRU4pIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjZW5SZWdpb25JZDogVGhlIHJlZ2lvbiB3aGVyZSB0aGUgQ0VOIGluc3RhbmNlIGlzIGRlcGxveWVkLiBZb3UgY2FuIGNhbGwgdGhlIERlc2NyaWJlUmVnaW9ucyBvcGVyYXRpb24gdG8gcXVlcnkgcmVnaW9uIElEcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5SZWdpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFwUmVzdWx0OiBUaGUgcm91dGUgbWFwIGJlaGF2aW9yIGFmdGVyIGFsbCBjb25kaXRpb25zIGFyZSBtYXRjaGVkLiBWYWxpZCB2YWx1ZXM6IFxuICAgICAqICBQZXJtaXQ6IGFsbG93cyB0aGUgcm91dGVzIHRoYXQgYXJlIG1hdGNoZWQuIFxuICAgICAqICBEZW55OiByZWplY3RzIHRoZSByb3V0ZXMgdGhhdCBhcmUgbWF0Y2hlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXBSZXN1bHQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByaW9yaXR5OiBUaGUgcHJpb3JpdHkgb2YgdGhlIHJvdXRlIG1hcC4gVmFsaWQgdmFsdWVzOiAxIHRvIDEwMCAuIEEgbG93ZXIgdmFsdWUgaW5kaWNhdGVzIGEgaGlnaGVyIHByaW9yaXR5LiBcbiAgICAgKiAgTm90ZSBJbiB0aGUgc2FtZSByZWdpb24sIGZvciByb3V0ZSBtYXBzIHRoYXQgYXJlIGFwcGxpZWQgaW4gdGhlIHNhbWUgZGlyZWN0aW9uLCB0aGUgcHJpb3JpdHkgaXMgdW5pcXVlLiBXaGVuIGEgcm91dGUgbWFwIGlzIGltcGxlbWVudGVkLCB0aGUgc3lzdGVtIG1hdGNoZXMgY29uZGl0aW9ucyB3aXRoIGEgcm91dGUgbWFwIHdob3NlIHByaW9yaXR5IG51bWJlciBpcyB0aGUgc21hbGxlc3QuIFRoZXJlZm9yZSwgbWFrZSBzdXJlIHRoYXQgeW91IHNldCBwcmlvcml0aWVzIGZvciByb3V0ZSBtYXBzIHRvIG1lZXQgeW91ciByZXF1aXJlbWVudHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpb3JpdHk6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRyYW5zbWl0RGlyZWN0aW9uOiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSByb3V0ZSBtYXAgaXMgYXBwbGllZC4gVmFsaWQgdmFsdWVzOiBcbiAgICAgKiAgUmVnaW9uSW46IFJvdXRlcyBhcmUgYWR2ZXJ0aXNlZCB0byBDRU4gZ2F0ZXdheXMuIFxuICAgICAqICBGb3IgZXhhbXBsZSwgcm91dGVzIGFyZSBhZHZlcnRpc2VkIGZyb20gbmV0d29yayBpbnN0YW5jZXMgZGVwbG95ZWQgaW4gdGhlIGN1cnJlbnQgcmVnaW9uIG9yIG90aGVyIHJlZ2lvbnMgdG8gdGhlIGdhdGV3YXlzIGRlcGxveWVkIGluIHRoZSBjdXJyZW50IHJlZ2lvbi4gXG4gICAgICogIFJlZ2lvbk91dDogUm91dGVzIGFyZSBhZHZlcnRpc2VkIGZyb20gQ0VOIGdhdGV3YXlzLiBcbiAgICAgKiAgRm9yIGV4YW1wbGUsIHJvdXRlcyBhcmUgYWR2ZXJ0aXNlZCBmcm9tIGdhdGV3YXlzIGRlcGxveWVkIGluIHRoZSBjdXJyZW50IHJlZ2lvbiB0byBuZXR3b3JrIGluc3RhbmNlcyBvciBnYXRld2F5cyBkZXBsb3llZCBpbiBvdGhlciByZWdpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYW5zbWl0RGlyZWN0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhc1BhdGhNYXRjaE1vZGU6IE1hdGNoIHN0YXRlbWVudHMgYXJlIHVzZWQgdG8gbWF0Y2ggdGhlIEFTIHBhdGhzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogIEluY2x1ZGU6IHVzZXMgZnV6enkgbWF0Y2guIElmIHRoZSBBUyBwYXRoIGluIHRoZSBjb25kaXRpb24gb3ZlcmxhcHMgd2l0aCB0aGUgQVMgcGF0aCBpbiB0aGUgcm91dGUsIHRoZSBtYXRjaCBpcyBzdWNjZXNzZnVsLlxuICAgICAqICBDb21wbGV0ZTogdXNlcyBleGFjdCBtYXRjaC4gT25seSB3aGVuIHRoZSBBUyBwYXRoIGluIHRoZSBjb25kaXRpb24gaXMgdGhlIHNhbWUgYXMgdGhlIEFTIHBhdGggaW4gdGhlIHJvdXRlLCB0aGUgbWF0Y2ggaXMgc3VjY2Vzc2Z1bC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhc1BhdGhNYXRjaE1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaWRyTWF0Y2hNb2RlOiBNYXRjaCBzdGF0ZW1lbnRzIGFyZSB1c2VkIHRvIG1hdGNoIHRoZSBwcmVmaXhlcy4gVmFsaWQgdmFsdWVzOiBcbiAgICAgKiAgSW5jbHVkZTogdXNlcyBmdXp6eSBtYXRjaC4gSWYgdGhlIHJvdXRpbmcgcHJlZml4IGluIHRoZSBjb25kaXRpb24gY29udGFpbnMgdGhlIHJvdXRpbmcgcHJlZml4IG9mIHRoZSByb3V0ZSwgdGhlIG1hdGNoIGlzIHN1Y2Nlc3NmdWwuIFxuICAgICAqICBGb3IgZXhhbXBsZSwgdGhlIDEuMS4wLjAvMTYgcG9saWN5IGNhbiBtYXRjaCB0aGUgMS4xLjEuMC8yNCByb3V0ZS4gXG4gICAgICogIENvbXBsZXRlOiB1c2VzIGV4YWN0IG1hdGNoLiBPbmx5IHdoZW4gdGhlIHJvdXRpbmcgcHJlZml4IGluIHRoZSBjb25kaXRpb24gaXMgdGhlIHNhbWUgYXMgdGhlIHJvdXRpbmcgcHJlZml4IG9mIHRoZSByb3V0ZSwgdGhlIG1hdGNoIGlzIHN1Y2Nlc3NmdWwuIFxuICAgICAqICBGb3IgZXhhbXBsZSwgdGhlIDEuMS4wLjAvMTYgcG9saWN5IGNhbiBtYXRjaCB0aGUgMS4xLjAuMC8xNiByb3V0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaWRyTWF0Y2hNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29tbXVuaXR5TWF0Y2hNb2RlOiBNYXRjaCBzdGF0ZW1lbnRzIGFyZSB1c2VkIHRvIG1hdGNoIHRoZSBDb21tdW5pdGllcy4gVmFsaWQgdmFsdWVzOiBcbiAgICAgKiAgSW5jbHVkZTogdXNlcyBmdXp6eSBtYXRjaC4gSWYgdGhlIENvbW11bml0eSBpbiB0aGUgY29uZGl0aW9uIG92ZXJsYXBzIHdpdGggdGhlIENvbW11bml0eSBvZiB0aGUgcm91dGUsIHRoZSBtYXRjaCBpcyBzdWNjZXNzZnVsLiBcbiAgICAgKiAgQ29tcGxldGU6IHVzZXMgZXhhY3QgbWF0Y2guIE9ubHkgd2hlbiB0aGUgQ29tbXVuaXR5IGluIHRoZSBjb25kaXRpb24gaXMgdGhlIHNhbWUgYXMgdGhlIENvbW11bml0eSBvZiB0aGUgcm91dGUsIHRoZSBtYXRjaCBpcyBzdWNjZXNzZnVsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbW11bml0eU1hdGNoTW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbW11bml0eU9wZXJhdGVNb2RlOiBBY3Rpb24gc3RhdGVtZW50cyBhcmUgdXNlZCB0byBvcGVyYXRlIHRoZSBDb21tdW5pdGllcy4gVmFsaWQgdmFsdWVzOiBcbiAgICAgKiAgQWRkaXRpdmU6IGFkZHMuIFxuICAgICAqICBSZXBsYWNlOiByZXBsYWNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21tdW5pdHlPcGVyYXRlTW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHJvdXRlIG1hcC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc3RpbmF0aW9uQ2hpbGRJbnN0YW5jZVR5cGVzOiBNYXRjaCBzdGF0ZW1lbnRzIGFyZSB1c2VkIHRvIG1hdGNoIHRoZSBkZXN0aW5hdGlvbiBpbnN0YW5jZSB0eXBlcy4gVmFsaWQgdmFsdWVzOiBcbiAgICAgKiAgVlBDOiBWUENzLiBcbiAgICAgKiAgVkJSOiBWQlJzLiBcbiAgICAgKiAgQ0NOOiBDQ04gaW5zdGFuY2VzIGluIG1haW5sYW5kIENoaW5hLiBcbiAgICAgKiAgTm90ZSBUaGUgZGVzdGluYXRpb24gaW5zdGFuY2UgdHlwZXMgYXJlIHZhbGlkIG9ubHkgd2hlbiB0aGUgcm91dGUgbWFwIGlzIGFwcGxpZWQgdG8gc2NlbmFyaW9zIHdoZXJlIHJvdXRlcyBhcmUgYWR2ZXJ0aXNlZCBmcm9tIGdhdGV3YXlzIGluIHRoZSBjdXJyZW50IHJlZ2lvbiB0byBpbnN0YW5jZXMgaW4gdGhlIGN1cnJlbnQgcmVnaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RpbmF0aW9uQ2hpbGRJbnN0YW5jZVR5cGVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc3RpbmF0aW9uQ2lkckJsb2NrczogTWF0Y2ggc3RhdGVtZW50cyBhcmUgdXNlZCB0byBtYXRjaCB0aGUgcm91dGluZyBwcmVmaXhlcy4gVGhlIENJRFIgZm9ybWF0IGlzIHVzZWQuIFlvdSBjYW4gZW50ZXIgYXQgbW9zdCAzMiBDSURSIGJsb2Nrcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvbkNpZHJCbG9ja3M/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdGluYXRpb25JbnN0YW5jZUlkczogTWF0Y2ggc3RhdGVtZW50cyBhcmUgdXNlZCB0byBtYXRjaCB0aGUgZGVzdGluYXRpb24gaW5zdGFuY2UgSURzLiBcbiAgICAgKiAgWW91IGNhbiBlbnRlciBpbnN0YW5jZSBJRHMgb2YgdGhlIGZvbGxvd2luZyB0eXBlczogVlBDLCBWQlIsIENDTiBpbiBtYWlubGFuZCBDaGluYSwgYW5kIFNBRy4gWW91IGNhbiBlbnRlciBhdCBtb3N0IDMyIGluc3RhbmNlIElEcy4gXG4gICAgICogIE5vdGUgVGhlIGRlc3RpbmF0aW9uIGluc3RhbmNlIElEcyBhcmUgdmFsaWQgb25seSB3aGVuIHRoZSByb3V0ZSBtYXAgaXMgYXBwbGllZCB0byBzY2VuYXJpb3Mgd2hlcmUgcm91dGVzIGFyZSBhZHZlcnRpc2VkIGZyb20gZ2F0ZXdheXMgaW4gdGhlIGN1cnJlbnQgcmVnaW9uIHRvIGluc3RhbmNlcyBpbiB0aGUgY3VycmVudCByZWdpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdGluYXRpb25JbnN0YW5jZUlkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0aW5hdGlvbkluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoOiBUaGUgSURzIG9mIGRlc3RpbmF0aW9uIGluc3RhbmNlcyB0byBiZSBhZHZlcnRpc2VkIGRvIG5vdCBzdXBwb3J0IG1hdGNoIHN0YXRlbWVudHMuIFZhbGlkIHZhbHVlczogXG4gICAgICogIGZhbHNlKGRlZmF1bHQgdmFsdWUpOiBJZiB0aGUgSUQgb2YgdGhlIGRlc3RpbmF0aW9uIGluc3RhbmNlIHRvIGJlIGFkdmVydGlzZWQgaXMgaW4gdGhlIERlc3RpbmF0aW9uSW5zdGFuY2VJZHMgZmllbGQsIHRoZSBtYXRjaCBpcyBzdWNjZXNzZnVsLiBcbiAgICAgKiAgdHJ1ZTogSWYgdGhlIElEIG9mIHRoZSBkZXN0aW5hdGlvbiBpbnN0YW5jZSB0byBiZSBhZHZlcnRpc2VkIGlzIG5vdCBpbiB0aGUgRGVzdGluYXRpb25JbnN0YW5jZUlkcyBmaWxlZCwgdGhlIG1hdGNoIGlzIHN1Y2Nlc3NmdWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdGluYXRpb25JbnN0YW5jZUlkc1JldmVyc2VNYXRjaD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0aW5hdGlvblJvdXRlVGFibGVJZHM6IE1hdGNoIHN0YXRlbWVudHMgYXJlIHVzZWQgdG8gbWF0Y2ggdGhlIElEcyBvZiB0aGUgZGVzdGluYXRpb24gcm91dGUgdGFibGVzLiBZb3UgY2FuIGVudGVyIGF0IG1vc3QgMzIgcm91dGUgdGFibGUgSURzLiBcbiAgICAgKiAgTm90ZSBUaGUgZGVzdGluYXRpb24gcm91dGUgdGFibGUgSURzIGFyZSB2YWxpZCBvbmx5IHdoZW4gdGhlIHJvdXRlIG1hcCBpcyBhcHBsaWVkIHRvIHNjZW5hcmlvcyB3aGVyZSByb3V0ZXMgYXJlIGFkdmVydGlzZWQgZnJvbSBnYXRld2F5cyBpbiB0aGUgY3VycmVudCByZWdpb24gdG8gcm91dGUgdGFibGVzIGluIHRoZSBjdXJyZW50IHJlZ2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvblJvdXRlVGFibGVJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWF0Y2hBc25zOiBNYXRjaCBzdGF0ZW1lbnRzIGFyZSB1c2VkIHRvIG1hdGNoIEFTIHBhdGhzIG9mIHRoZSByb3V0ZXMuIEFuIEFTIHBhdGggaXMgYSBtYW5kYXRvcnkgYXR0cmlidXRlLCB3aGljaCBkZXNjcmliZXMgdGhlIEFTIG51bWJlciB0aHJvdWdoIHdoaWNoIGEgQkdQIHJvdXRlIHBhc3NlcyB3aGVuIHRoZSBCR1Agcm91dGUgaXMgYWR2ZXJ0aXNlZC4gXG4gICAgICogIE9ubHkgdGhlIEFTLVNFUVVFTkNFIHBhcmFtZXRlciBpcyBzdXBwb3J0ZWQuIFRoZSBBUy1TRVQsIEFTLUNPTkZFRC1TRVFVRU5DRSwgYW5kIEFTLUNPTkZFRC1TRVQgcGFyYW1ldGVycyBhcmUgbm90IHN1cHBvcnRlZC4gU3BlY2lmaWNhbGx5LCBvbmx5IHRoZSBBUyBudW1iZXIgbGlzdCBpcyBzdXBwb3J0ZWQuIFNldHMgYW5kIHN1Yi1saXN0cyBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXRjaEFzbnM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWF0Y2hDb21tdW5pdHlTZXQ6IE1hdGNoIHN0YXRlbWVudHMgYXJlIHVzZWQgdG8gbWF0Y2ggdGhlIENvbW11bml0aWVzLiBFbnRlciBlYWNoIENvbW11bml0eSBpbiB0aGUgZm9ybWF0IG9mIG5uOm5uLiBWYWxpZCB2YWx1ZXMgb2Ygbm46IDEgdG8gNjU1MzUuIFlvdSBjYW4gZW50ZXIgYXQgbW9zdCAzMiBDb21tdW5pdGllcy4gRWFjaCBDb21tdW5pdHkgbXVzdCBjb21wbHkgd2l0aCBSRkMgMTk5Ny4gUkZDIDgwOTIgaXMgbm90IHN1cHBvcnRlZC4gXG4gICAgICogIE5vdGUgSWYgdGhlIGNvbmZpZ3VyYXRpb25zIG9mIHRoZSBDb21tdW5pdGllcyBhcmUgaW5jb3JyZWN0LCByb3V0ZXMgbWF5IG5vdCBiZSBhZHZlcnRpc2VkIHRvIHRoZSBvbi1wcmVtaXNlcyBkYXRhIGNlbnRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXRjaENvbW11bml0eVNldD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXh0UHJpb3JpdHk6IFRoZSBwcmlvcml0eSBvZiB0aGUgbmV4dCBhc3NvY2lhdGVkIHJvdXRlIG1hcC4gVmFsaWQgdmFsdWVzOiAxIHRvIDEwMC4gXG4gICAgICogIElmIHRoZSBwcmlvcml0eSBpcyBub3Qgc2V0LCBubyBuZXh0IHJvdXRlIG1hcCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGN1cnJlbnQgcm91dGUgbWFwLiBcbiAgICAgKiAgSWYgdGhlIHByaW9yaXR5IGlzIHNldCB0byAxLCB0aGUgbmV4dCByb3V0ZSBtYXAgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IHJvdXRlIG1hcC4gXG4gICAgICogIElmIHRoZSBwcmlvcml0eSBpcyBzZXQgYW5kIHRoZSB2YWx1ZSBpcyBub3QgMSwgdGhlIHByaW9yaXR5IG9mIHRoZSBhc3NvY2lhdGVkIHJvdXRlIG1hcCBtdXN0IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGN1cnJlbnQgcm91dGUgbWFwLiBcbiAgICAgKiAgT25seSB3aGVuIHRoZSBNYXBSZXN1bHQgcGFyYW1ldGVyIGlzIHNldCB0byBQZXJtaXQsIHRoZSBtYXRjaGVkIHJvdXRlcyBjb250aW51ZSB0byBtYXRjaCB0aGUgbmV4dCBhc3NvY2lhdGVkIHJvdXRlIG1hcHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV4dFByaW9yaXR5PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3BlcmF0ZUNvbW11bml0eVNldDogQWN0aW9uIHN0YXRlbWVudHMgYXJlIHVzZWQgdG8gb3BlcmF0ZSB0aGUgQ29tbXVuaXRpZXMuIFZhbGlkIHZhbHVlczogRW50ZXIgZWFjaCBDb21tdW5pdHkgaW4gdGhlIGZvcm1hdCBvZiBubjpubi4gVmFsaWQgdmFsdWVzIG9mIG5uOiAxIHRvIDY1NTM1LiBZb3UgY2FuIGVudGVyIGF0IG1vc3QgMzIgQ29tbXVuaXRpZXMuIEVhY2ggQ29tbXVuaXR5IG11c3QgY29tcGx5IHdpdGggUkZDIDE5OTcuIFJGQyA4MDkyIGlzIG5vdCBzdXBwb3J0ZWQuIFxuICAgICAqICBOb3RlIElmIHRoZSBjb25maWd1cmF0aW9ucyBvZiB0aGUgQ29tbXVuaXRpZXMgYXJlIGluY29ycmVjdCwgcm91dGVzIG1heSBub3QgYmUgYWR2ZXJ0aXNlZCB0byB0aGUgb24tcHJlbWlzZXMgZGF0YSBjZW50ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3BlcmF0ZUNvbW11bml0eVNldD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmVmZXJlbmNlOiBBY3Rpb24gc3RhdGVtZW50cyBhcmUgdXNlZCB0byBtb2RpZnkgcm91dGUgcHJpb3JpdGllcy4gVmFsaWQgdmFsdWVzOiAxIHRvIDEwMC4gRGVmYXVsdCB2YWx1ZTogNTAuIEEgc21hbGxlciBudW1iZXIgaW5kaWNhdGVzIGEgaGlnaGVyIHByaW9yaXR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByZWZlcmVuY2U/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmVwZW5kQXNQYXRoOiBBUyBwYXRocyBhcmUgYXR0YWNoZWQgd2hlbiByZWdpb25hbCBnYXRld2F5cyByZWNlaXZlIG9yIGFkdmVydGlzZSByb3V0ZXMuIFxuICAgICAqICBGb3Igcm91dGUgbWFwcyB0aGF0IGFyZSBhcHBsaWVkIGluIGRpZmZlcmVudCBkaXJlY3Rpb25zLCB0aGUgcmVxdWlyZW1lbnRzIGZvciBBUyBwYXRocyB0byBiZSBhdHRhY2hlZCBhcmUgZGlmZmVyZW50OiBcbiAgICAgKiAgRm9yIHRoZSBpbmJvdW5kIGRpcmVjdGlvbjogWW91IG11c3Qgc3BlY2lmeSB0aGUgbGlzdCBvZiBzb3VyY2UgaW5zdGFuY2UgSURzIGFuZCB0aGUgc291cmNlIHJlZ2lvbiBpbiB0aGUgY29uZGl0aW9uIHRvIGJlIG1hdGNoZWQuIFRoZSBzb3VyY2UgcmVnaW9uIG11c3QgYmUgdGhlIHNhbWUgYXMgdGhlIHJlZ2lvbiB3aGVyZSB0aGUgcm91dGUgbWFwIGlzIGFwcGxpZWQuIFxuICAgICAqICBGb3IgdGhlIG91dGJvdW5kIGRpcmVjdGlvbjogWW91IG11c3Qgc3BlY2lmeSB0aGUgbGlzdCBvZiBkZXN0aW5hdGlvbiBpbnN0YW5jZSBJRHMgaW4gdGhlIGNvbmRpdGlvbiB0byBiZSBtYXRjaGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByZXBlbmRBc1BhdGg/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm91dGVUeXBlczogTWF0Y2ggc3RhdGVtZW50cyBhcmUgdXNlZCB0byBtYXRjaCB0aGUgcm91dGUgdHlwZXMuIFZhbGlkIHZhbHVlczogXG4gICAgICogIFN5c3RlbTogc3lzdGVtIHJvdXRlcyB0aGF0IGFyZSBnZW5lcmF0ZWQgYnkgdGhlIHN5c3RlbS4gXG4gICAgICogIEN1c3RvbTogY3VzdG9tIHJvdXRlcyB0aGF0IGFyZSBjcmVhdGVkIGJ5IHVzZXJzLiBcbiAgICAgKiAgQkdQOiBCb3JkZXIgR2F0ZXdheSBQcm90b2NvbCAoQkdQKSByb3V0ZXMgdGhhdCBhcmUgYWR2ZXJ0aXNlZCB0byBCR1AuIFxuICAgICAqICBZb3UgY2FuIGVudGVyIG11bHRpcGxlIHR5cGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlVHlwZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc291cmNlQ2hpbGRJbnN0YW5jZVR5cGVzOiBNYXRjaCBzdGF0ZW1lbnRzIGFyZSB1c2VkIHRvIG1hdGNoIHNvdXJjZSBpbnN0YW5jZSB0eXBlcyBvZiB0aGUgcm91dGVzLiBWYWxpZCB2YWx1ZXM6IFxuICAgICAqICBWUEM6IFZQQ3MuIFxuICAgICAqICBWQlI6IFZCUnMuIFxuICAgICAqICBDQ046IENDTiBpbnN0YW5jZXMgaW4gbWFpbmxhbmQgQ2hpbmEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlQ2hpbGRJbnN0YW5jZVR5cGVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZUluc3RhbmNlSWRzOiBNYXRjaCBzdGF0ZW1lbnRzIGFyZSB1c2VkIHRvIG1hdGNoIHNvdXJjZSBpbnN0YW5jZSBJRHMgb2YgdGhlIHJvdXRlcy4gXG4gICAgICogIFlvdSBjYW4gZW50ZXIgaW5zdGFuY2UgSURzIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6IHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKSwgdmlydHVhbCBib3JkZXIgcm91dGVyIChWQlIpLCBDbG91ZCBDb25uZWN0IE5ldHdvcmsgKENDTikgaW4gbWFpbmxhbmQgQ2hpbmEsIFNtYXJ0IEFjY2VzcyBHYXRld2F5IChTQUcpLiBZb3UgY2FuIGVudGVyIGF0IG1vc3QgMzIgaW5zdGFuY2UgSURzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZUluc3RhbmNlSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZUluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoOiBUaGUgSURzIG9mIHNvdXJjZSBpbnN0YW5jZXMgdG8gYmUgYWR2ZXJ0aXNlZCBkbyBub3Qgc3VwcG9ydCBtYXRjaCBzdGF0ZW1lbnRzLiBWYWxpZCB2YWx1ZXM6IFxuICAgICAqICBmYWxzZSAoZGVmYXVsdCB2YWx1ZSk6IElmIHRoZSBzb3VyY2UgaW5zdGFuY2UgSUQgaXMgaW4gdGhlIFNvdXJjZUluc3RhbmNlSWRzIGZpZWxkLCB0aGUgbWF0Y2ggaXMgc3VjY2Vzc2Z1bC4gXG4gICAgICogIHRydWU6IElmIHRoZSBzb3VyY2UgaW5zdGFuY2UgSUQgaXMgbm90IGluIHRoZSBTb3VyY2VJbnN0YW5jZUlkcyBmaWVsZCwgdGhlIG1hdGNoIGlzIHN1Y2Nlc3NmdWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlSW5zdGFuY2VJZHNSZXZlcnNlTWF0Y2g/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc291cmNlUmVnaW9uSWRzOiBNYXRjaCBzdGF0ZW1lbnRzIGFyZSB1c2VkIHRvIG1hdGNoIHNvdXJjZSByZWdpb24gSURzIG9mIHRoZSByb3V0ZXMuIFlvdSBjYW4gZW50ZXIgYXQgbW9zdCAzMiByZWdpb24gSURzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZVJlZ2lvbklkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzb3VyY2VSb3V0ZVRhYmxlSWRzOiBNYXRjaCBzdGF0ZW1lbnRzIGFyZSB1c2VkIHRvIG1hdGNoIHNvdXJjZSByb3V0ZSB0YWJsZSBJRHMgb2YgdGhlIHJvdXRlcy4gWW91IGNhbiBlbnRlciBhdCBtb3N0IDMyIHJvdXRlIHRhYmxlIElEcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VSb3V0ZVRhYmxlSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q0VOOjpDZW5Sb3V0ZU1hcGBcbiAqL1xuZXhwb3J0IGNsYXNzIENlblJvdXRlTWFwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSb3V0ZU1hcElkOiBUaGUgSUQgb2YgdGhlIHJvdXRlIG1hcC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlTWFwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDRU46OkNlblJvdXRlTWFwYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDZW5Sb3V0ZU1hcFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0NlblJvdXRlTWFwID0gbmV3IFJvc0NlblJvdXRlTWFwKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgc291cmNlSW5zdGFuY2VJZHNSZXZlcnNlTWF0Y2g6IHByb3BzLnNvdXJjZUluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoLFxuICAgICAgICAgICAgdHJhbnNtaXREaXJlY3Rpb246IHByb3BzLnRyYW5zbWl0RGlyZWN0aW9uLFxuICAgICAgICAgICAgbWF0Y2hDb21tdW5pdHlTZXQ6IHByb3BzLm1hdGNoQ29tbXVuaXR5U2V0LFxuICAgICAgICAgICAgY2VuUmVnaW9uSWQ6IHByb3BzLmNlblJlZ2lvbklkLFxuICAgICAgICAgICAgc291cmNlUm91dGVUYWJsZUlkczogcHJvcHMuc291cmNlUm91dGVUYWJsZUlkcyxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uSW5zdGFuY2VJZHM6IHByb3BzLmRlc3RpbmF0aW9uSW5zdGFuY2VJZHMsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoOiBwcm9wcy5kZXN0aW5hdGlvbkluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoLFxuICAgICAgICAgICAgc291cmNlSW5zdGFuY2VJZHM6IHByb3BzLnNvdXJjZUluc3RhbmNlSWRzLFxuICAgICAgICAgICAgZGVzdGluYXRpb25Sb3V0ZVRhYmxlSWRzOiBwcm9wcy5kZXN0aW5hdGlvblJvdXRlVGFibGVJZHMsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkNpZHJCbG9ja3M6IHByb3BzLmRlc3RpbmF0aW9uQ2lkckJsb2NrcyxcbiAgICAgICAgICAgIG9wZXJhdGVDb21tdW5pdHlTZXQ6IHByb3BzLm9wZXJhdGVDb21tdW5pdHlTZXQsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkNoaWxkSW5zdGFuY2VUeXBlczogcHJvcHMuZGVzdGluYXRpb25DaGlsZEluc3RhbmNlVHlwZXMsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJvcHMucHJpb3JpdHksXG4gICAgICAgICAgICBzb3VyY2VDaGlsZEluc3RhbmNlVHlwZXM6IHByb3BzLnNvdXJjZUNoaWxkSW5zdGFuY2VUeXBlcyxcbiAgICAgICAgICAgIGFzUGF0aE1hdGNoTW9kZTogcHJvcHMuYXNQYXRoTWF0Y2hNb2RlLFxuICAgICAgICAgICAgY2lkck1hdGNoTW9kZTogcHJvcHMuY2lkck1hdGNoTW9kZSxcbiAgICAgICAgICAgIG1hcFJlc3VsdDogcHJvcHMubWFwUmVzdWx0LFxuICAgICAgICAgICAgcm91dGVUeXBlczogcHJvcHMucm91dGVUeXBlcyxcbiAgICAgICAgICAgIHByZWZlcmVuY2U6IHByb3BzLnByZWZlcmVuY2UsXG4gICAgICAgICAgICBjb21tdW5pdHlPcGVyYXRlTW9kZTogcHJvcHMuY29tbXVuaXR5T3BlcmF0ZU1vZGUsXG4gICAgICAgICAgICBjZW5JZDogcHJvcHMuY2VuSWQsXG4gICAgICAgICAgICBuZXh0UHJpb3JpdHk6IHByb3BzLm5leHRQcmlvcml0eSxcbiAgICAgICAgICAgIHByZXBlbmRBc1BhdGg6IHByb3BzLnByZXBlbmRBc1BhdGgsXG4gICAgICAgICAgICBjb21tdW5pdHlNYXRjaE1vZGU6IHByb3BzLmNvbW11bml0eU1hdGNoTW9kZSxcbiAgICAgICAgICAgIG1hdGNoQXNuczogcHJvcHMubWF0Y2hBc25zLFxuICAgICAgICAgICAgc291cmNlUmVnaW9uSWRzOiBwcm9wcy5zb3VyY2VSZWdpb25JZHMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ2VuUm91dGVNYXA7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlTWFwSWQgPSByb3NDZW5Sb3V0ZU1hcC5hdHRyUm91dGVNYXBJZDtcbiAgICB9XG59XG4iXX0=