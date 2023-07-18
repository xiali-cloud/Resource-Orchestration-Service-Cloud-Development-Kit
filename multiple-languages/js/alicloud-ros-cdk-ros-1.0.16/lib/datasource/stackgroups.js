"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackGroups = exports.StackGroupsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_generated_1 = require("./ros.generated");
Object.defineProperty(exports, "StackGroupsProperty", { enumerable: true, get: function () { return ros_generated_1.RosStackGroups; } });
/**
 * A ROS resource type:  `DATASOURCE::ROS::StackGroups`
 */
class StackGroups extends ros.Resource {
    /**
     * Create a new `DATASOURCE::ROS::StackGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosStackGroups = new ros_generated_1.RosStackGroups(this, id, {
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStackGroups;
        this.attrStackGroupNames = rosStackGroups.attrStackGroupNames;
        this.attrStackGroups = rosStackGroups.attrStackGroups;
    }
}
exports.StackGroups = StackGroups;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tncm91cHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFja2dyb3Vwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQWE5Qzs7R0FFRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ6Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQTBCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUN2SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sY0FBYyxHQUFHLElBQUksOEJBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ2pELGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtTQUN6QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBYyxDQUFDLG1CQUFtQixDQUFDO1FBQzlELElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUMxRCxDQUFDO0NBQ0o7QUFsQ0Qsa0NBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU3RhY2tHcm91cHMgfSBmcm9tICcuL3Jvcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTdGFja0dyb3VwcyBhcyBTdGFja0dyb3Vwc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6Uk9TOjpTdGFja0dyb3Vwc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGFja0dyb3Vwc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBEQVRBU09VUkNFOjpST1M6OlN0YWNrR3JvdXBzYFxuICovXG5leHBvcnQgY2xhc3MgU3RhY2tHcm91cHMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFN0YWNrR3JvdXBOYW1lczogVGhlIGxpc3Qgb2Ygc3RhY2sgZ3JvdXAgbmFtZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdGFja0dyb3VwTmFtZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTdGFja0dyb3VwczogVGhlIGxpc3Qgb2Ygc3RhY2sgZ3JvdXBzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RhY2tHcm91cHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgREFUQVNPVVJDRTo6Uk9TOjpTdGFja0dyb3Vwc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU3RhY2tHcm91cHNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1N0YWNrR3JvdXBzID0gbmV3IFJvc1N0YWNrR3JvdXBzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU3RhY2tHcm91cHM7XG4gICAgICAgIHRoaXMuYXR0clN0YWNrR3JvdXBOYW1lcyA9IHJvc1N0YWNrR3JvdXBzLmF0dHJTdGFja0dyb3VwTmFtZXM7XG4gICAgICAgIHRoaXMuYXR0clN0YWNrR3JvdXBzID0gcm9zU3RhY2tHcm91cHMuYXR0clN0YWNrR3JvdXBzO1xuICAgIH1cbn1cbiJdfQ==