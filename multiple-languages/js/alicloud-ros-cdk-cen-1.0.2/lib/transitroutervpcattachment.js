"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitRouterVpcAttachment = exports.TransitRouterVpcAttachmentProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cen_generated_1 = require("./cen.generated");
Object.defineProperty(exports, "TransitRouterVpcAttachmentProperty", { enumerable: true, get: function () { return cen_generated_1.RosTransitRouterVpcAttachment; } });
/**
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterVpcAttachment`
 */
class TransitRouterVpcAttachment extends ros.Resource {
    /**
     * Create a new `ALIYUN::CEN::TransitRouterVpcAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosTransitRouterVpcAttachment = new cen_generated_1.RosTransitRouterVpcAttachment(this, id, {
            routeTableAssociationEnabled: props.routeTableAssociationEnabled,
            autoCreateVpcRoute: props.autoCreateVpcRoute,
            vpcId: props.vpcId,
            chargeType: props.chargeType,
            routeTablePropagationEnabled: props.routeTablePropagationEnabled,
            cenId: props.cenId,
            transitRouterAttachmentName: props.transitRouterAttachmentName,
            resourceType: props.resourceType,
            zoneMappings: props.zoneMappings,
            vpcOwnerId: props.vpcOwnerId,
            transitRouterAttachmentDescription: props.transitRouterAttachmentDescription,
            transitRouterId: props.transitRouterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterVpcAttachment;
        this.attrCenId = rosTransitRouterVpcAttachment.attrCenId;
        this.attrClientToken = rosTransitRouterVpcAttachment.attrClientToken;
        this.attrResourceType = rosTransitRouterVpcAttachment.attrResourceType;
        this.attrTransitRouterAttachmentDescription = rosTransitRouterVpcAttachment.attrTransitRouterAttachmentDescription;
        this.attrTransitRouterAttachmentId = rosTransitRouterVpcAttachment.attrTransitRouterAttachmentId;
        this.attrTransitRouterAttachmentName = rosTransitRouterVpcAttachment.attrTransitRouterAttachmentName;
        this.attrTransitRouterId = rosTransitRouterVpcAttachment.attrTransitRouterId;
        this.attrVpcId = rosTransitRouterVpcAttachment.attrVpcId;
        this.attrVpcOwnerId = rosTransitRouterVpcAttachment.attrVpcOwnerId;
    }
}
exports.TransitRouterVpcAttachment = TransitRouterVpcAttachment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdHJvdXRlcnZwY2F0dGFjaG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFuc2l0cm91dGVydnBjYXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWdFO0FBRXRCLG1IQUZqQyw2Q0FBNkIsT0FFc0M7QUFvRTVFOztHQUVHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQW9EeEQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQyxFQUFFLG1DQUEyQyxJQUFJO1FBQ2pJLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSw2QkFBNkIsR0FBRyxJQUFJLDZDQUE2QixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0UsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLDRCQUE0QjtZQUNoRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLDRCQUE0QjtZQUNoRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLDJCQUEyQjtZQUM5RCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixrQ0FBa0MsRUFBRSxLQUFLLENBQUMsa0NBQWtDO1lBQzVFLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtTQUN6QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLDZCQUE2QixDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsNkJBQTZCLENBQUMsU0FBUyxDQUFDO1FBQ3pELElBQUksQ0FBQyxlQUFlLEdBQUcsNkJBQTZCLENBQUMsZUFBZSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyw2QkFBNkIsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RSxJQUFJLENBQUMsc0NBQXNDLEdBQUcsNkJBQTZCLENBQUMsc0NBQXNDLENBQUM7UUFDbkgsSUFBSSxDQUFDLDZCQUE2QixHQUFHLDZCQUE2QixDQUFDLDZCQUE2QixDQUFDO1FBQ2pHLElBQUksQ0FBQywrQkFBK0IsR0FBRyw2QkFBNkIsQ0FBQywrQkFBK0IsQ0FBQztRQUNyRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsNkJBQTZCLENBQUMsbUJBQW1CLENBQUM7UUFDN0UsSUFBSSxDQUFDLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQyxTQUFTLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyw2QkFBNkIsQ0FBQyxjQUFjLENBQUM7SUFDdkUsQ0FBQztDQUNKO0FBdkZELGdFQXVGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1RyYW5zaXRSb3V0ZXJWcGNBdHRhY2htZW50IH0gZnJvbSAnLi9jZW4uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zVHJhbnNpdFJvdXRlclZwY0F0dGFjaG1lbnQgYXMgVHJhbnNpdFJvdXRlclZwY0F0dGFjaG1lbnRQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q0VOOjpUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBWcGNJZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lTWFwcGluZ3M6IFpvbmVNYXBwaW5nc3NcbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lTWFwcGluZ3M6IEFycmF5PFJvc1RyYW5zaXRSb3V0ZXJWcGNBdHRhY2htZW50LlpvbmVNYXBwaW5nc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9DcmVhdGVWcGNSb3V0ZTpcbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvQ3JlYXRlVnBjUm91dGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjZW5JZDogQ2VuSWRcbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNoYXJnZVR5cGU6XG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlVHlwZTogUmVzb3VyY2VUeXBlXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm91dGVUYWJsZUFzc29jaWF0aW9uRW5hYmxlZDpcbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZVRhYmxlQXNzb2NpYXRpb25FbmFibGVkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm91dGVUYWJsZVByb3BhZ2F0aW9uRW5hYmxlZDpcbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZVRhYmxlUHJvcGFnYXRpb25FbmFibGVkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHJhbnNpdFJvdXRlckF0dGFjaG1lbnREZXNjcmlwdGlvbjogVHJhbnNpdFJvdXRlckF0dGFjaG1lbnREZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYW5zaXRSb3V0ZXJBdHRhY2htZW50RGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyQXR0YWNobWVudE5hbWU6IFRyYW5zaXRSb3V0ZXJBdHRhY2htZW50TmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYW5zaXRSb3V0ZXJBdHRhY2htZW50TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJJZDogVHJhbnNpdFJvdXRlcklkXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhbnNpdFJvdXRlcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjT3duZXJJZDogVnBjT3duZXJJZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY093bmVySWQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkNFTjo6VHJhbnNpdFJvdXRlclZwY0F0dGFjaG1lbnRgXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2VuSWQ6IENlbklkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDZW5JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENsaWVudFRva2VuOiBDbGllbnRUb2tlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2xpZW50VG9rZW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVHJhbnNpdFJvdXRlckF0dGFjaG1lbnREZXNjcmlwdGlvbjogVHJhbnNpdFJvdXRlckF0dGFjaG1lbnREZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNpdFJvdXRlckF0dGFjaG1lbnREZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRyYW5zaXRSb3V0ZXJBdHRhY2htZW50SWQ6IFRoZSBmaXJzdCBJRCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYW5zaXRSb3V0ZXJBdHRhY2htZW50SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUcmFuc2l0Um91dGVyQXR0YWNobWVudE5hbWU6IFRyYW5zaXRSb3V0ZXJBdHRhY2htZW50TmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNpdFJvdXRlckF0dGFjaG1lbnROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVHJhbnNpdFJvdXRlcklkOiBUcmFuc2l0Um91dGVySWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYW5zaXRSb3V0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0lkOiBWcGNJZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNPd25lcklkOiBWcGNPd25lcklkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNPd25lcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q0VOOjpUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVHJhbnNpdFJvdXRlclZwY0F0dGFjaG1lbnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudCA9IG5ldyBSb3NUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHJvdXRlVGFibGVBc3NvY2lhdGlvbkVuYWJsZWQ6IHByb3BzLnJvdXRlVGFibGVBc3NvY2lhdGlvbkVuYWJsZWQsXG4gICAgICAgICAgICBhdXRvQ3JlYXRlVnBjUm91dGU6IHByb3BzLmF1dG9DcmVhdGVWcGNSb3V0ZSxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGNoYXJnZVR5cGU6IHByb3BzLmNoYXJnZVR5cGUsXG4gICAgICAgICAgICByb3V0ZVRhYmxlUHJvcGFnYXRpb25FbmFibGVkOiBwcm9wcy5yb3V0ZVRhYmxlUHJvcGFnYXRpb25FbmFibGVkLFxuICAgICAgICAgICAgY2VuSWQ6IHByb3BzLmNlbklkLFxuICAgICAgICAgICAgdHJhbnNpdFJvdXRlckF0dGFjaG1lbnROYW1lOiBwcm9wcy50cmFuc2l0Um91dGVyQXR0YWNobWVudE5hbWUsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHByb3BzLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIHpvbmVNYXBwaW5nczogcHJvcHMuem9uZU1hcHBpbmdzLFxuICAgICAgICAgICAgdnBjT3duZXJJZDogcHJvcHMudnBjT3duZXJJZCxcbiAgICAgICAgICAgIHRyYW5zaXRSb3V0ZXJBdHRhY2htZW50RGVzY3JpcHRpb246IHByb3BzLnRyYW5zaXRSb3V0ZXJBdHRhY2htZW50RGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0cmFuc2l0Um91dGVySWQ6IHByb3BzLnRyYW5zaXRSb3V0ZXJJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudDtcbiAgICAgICAgdGhpcy5hdHRyQ2VuSWQgPSByb3NUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudC5hdHRyQ2VuSWQ7XG4gICAgICAgIHRoaXMuYXR0ckNsaWVudFRva2VuID0gcm9zVHJhbnNpdFJvdXRlclZwY0F0dGFjaG1lbnQuYXR0ckNsaWVudFRva2VuO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZVR5cGUgPSByb3NUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudC5hdHRyUmVzb3VyY2VUeXBlO1xuICAgICAgICB0aGlzLmF0dHJUcmFuc2l0Um91dGVyQXR0YWNobWVudERlc2NyaXB0aW9uID0gcm9zVHJhbnNpdFJvdXRlclZwY0F0dGFjaG1lbnQuYXR0clRyYW5zaXRSb3V0ZXJBdHRhY2htZW50RGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJBdHRhY2htZW50SWQgPSByb3NUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudC5hdHRyVHJhbnNpdFJvdXRlckF0dGFjaG1lbnRJZDtcbiAgICAgICAgdGhpcy5hdHRyVHJhbnNpdFJvdXRlckF0dGFjaG1lbnROYW1lID0gcm9zVHJhbnNpdFJvdXRlclZwY0F0dGFjaG1lbnQuYXR0clRyYW5zaXRSb3V0ZXJBdHRhY2htZW50TmFtZTtcbiAgICAgICAgdGhpcy5hdHRyVHJhbnNpdFJvdXRlcklkID0gcm9zVHJhbnNpdFJvdXRlclZwY0F0dGFjaG1lbnQuYXR0clRyYW5zaXRSb3V0ZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudC5hdHRyVnBjSWQ7XG4gICAgICAgIHRoaXMuYXR0clZwY093bmVySWQgPSByb3NUcmFuc2l0Um91dGVyVnBjQXR0YWNobWVudC5hdHRyVnBjT3duZXJJZDtcbiAgICB9XG59XG4iXX0=