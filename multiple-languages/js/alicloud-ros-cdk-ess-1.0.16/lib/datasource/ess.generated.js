"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosScalingGroups = exports.RosScalingConfigurations = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosScalingConfigurationsProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingConfigurationsProps`
 *
 * @returns the result of the validation.
 */
function RosScalingConfigurationsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    if (properties.scalingConfigurationIds && (Array.isArray(properties.scalingConfigurationIds) || (typeof properties.scalingConfigurationIds) === 'string')) {
        errors.collect(ros.propertyValidator('scalingConfigurationIds', ros.validateLength)({
            data: properties.scalingConfigurationIds.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('scalingConfigurationIds', ros.listValidator(ros.validateString))(properties.scalingConfigurationIds));
    if (properties.scalingConfigurationNames && (Array.isArray(properties.scalingConfigurationNames) || (typeof properties.scalingConfigurationNames) === 'string')) {
        errors.collect(ros.propertyValidator('scalingConfigurationNames', ros.validateLength)({
            data: properties.scalingConfigurationNames.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('scalingConfigurationNames', ros.listValidator(ros.validateString))(properties.scalingConfigurationNames));
    return errors.wrap('supplied properties not correct for "RosScalingConfigurationsProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingConfigurationsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingConfigurations` resource.
 */
// @ts-ignore TS6133
function rosScalingConfigurationsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosScalingConfigurationsPropsValidator(properties).assertSuccess();
    }
    return {
        ScalingConfigurationIds: ros.listMapper(ros.stringToRosTemplate)(properties.scalingConfigurationIds),
        ScalingConfigurationNames: ros.listMapper(ros.stringToRosTemplate)(properties.scalingConfigurationNames),
        ScalingGroupId: ros.stringToRosTemplate(properties.scalingGroupId),
    };
}
/**
 * A ROS template type:  `DATASOURCE::ESS::ScalingConfigurations`
 */
class RosScalingConfigurations extends ros.RosResource {
    /**
     * Create a new `DATASOURCE::ESS::ScalingConfigurations`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosScalingConfigurations.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingConfigurationIds = this.getAtt('ScalingConfigurationIds');
        this.attrScalingConfigurations = this.getAtt('ScalingConfigurations');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.scalingConfigurationIds = props.scalingConfigurationIds;
        this.scalingConfigurationNames = props.scalingConfigurationNames;
        this.scalingGroupId = props.scalingGroupId;
    }
    get rosProperties() {
        return {
            scalingConfigurationIds: this.scalingConfigurationIds,
            scalingConfigurationNames: this.scalingConfigurationNames,
            scalingGroupId: this.scalingGroupId,
        };
    }
    renderProperties(props) {
        return rosScalingConfigurationsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosScalingConfigurations = RosScalingConfigurations;
/**
 * The resource type name for this resource class.
 */
RosScalingConfigurations.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingConfigurations";
/**
 * Determine whether the given properties match those of a `RosScalingGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosScalingGroupsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.scalingGroupNames && (Array.isArray(properties.scalingGroupNames) || (typeof properties.scalingGroupNames) === 'string')) {
        errors.collect(ros.propertyValidator('scalingGroupNames', ros.validateLength)({
            data: properties.scalingGroupNames.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('scalingGroupNames', ros.listValidator(ros.validateString))(properties.scalingGroupNames));
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    if (properties.scalingGroupIds && (Array.isArray(properties.scalingGroupIds) || (typeof properties.scalingGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('scalingGroupIds', ros.validateLength)({
            data: properties.scalingGroupIds.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('scalingGroupIds', ros.listValidator(ros.validateString))(properties.scalingGroupIds));
    return errors.wrap('supplied properties not correct for "RosScalingGroupsProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingGroups` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosScalingGroupsPropsValidator(properties).assertSuccess();
    }
    return {
        GroupType: ros.stringToRosTemplate(properties.groupType),
        ScalingGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.scalingGroupIds),
        ScalingGroupNames: ros.listMapper(ros.stringToRosTemplate)(properties.scalingGroupNames),
    };
}
/**
 * A ROS template type:  `DATASOURCE::ESS::ScalingGroups`
 */
class RosScalingGroups extends ros.RosResource {
    /**
     * Create a new `DATASOURCE::ESS::ScalingGroups`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosScalingGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingGroupIds = this.getAtt('ScalingGroupIds');
        this.attrScalingGroups = this.getAtt('ScalingGroups');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupType = props.groupType;
        this.scalingGroupIds = props.scalingGroupIds;
        this.scalingGroupNames = props.scalingGroupNames;
    }
    get rosProperties() {
        return {
            groupType: this.groupType,
            scalingGroupIds: this.scalingGroupIds,
            scalingGroupNames: this.scalingGroupNames,
        };
    }
    renderProperties(props) {
        return rosScalingGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosScalingGroups = RosScalingGroups;
/**
 * The resource type name for this resource class.
 */
RosScalingGroups.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingGroups";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVzcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXVCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxzQ0FBc0MsQ0FBQyxVQUFlO0lBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RyxJQUFHLFVBQVUsQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQ3RKLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoRixJQUFJLEVBQUUsVUFBVSxDQUFDLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxD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ZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERBVEFTT1VSQ0U6OkVTUzo6U2NhbGluZ0NvbmZpZ3VyYXRpb25zYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nQ29uZmlndXJhdGlvbklkczogVGhlIElEIG9mIHNjYWxpbmcgY29uZmlndXJhdGlvbiB0aGF0IHlvdSB3YW50IHRvIHF1ZXJ5LiBWYWxpZCB2YWx1ZXMgOiAxIHRvIDEwLiBUaGUgSURzIG9mIGFjdGl2ZSBhbmQgaW5hY3RpdmUgc2NhbGluZyBjb25maWd1cmF0aW9ucyBhcmUgZGlzcGxheWVkIGluIHRoZSBxdWVyeSByZXN1bHRzLCBhbmQgY2FuIGJlIGRpZmZlcmVudGlhdGVkIGJ5IExpZmVjeWNsZVN0YXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjYWxpbmdDb25maWd1cmF0aW9uSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzOiBUaGUgbmFtZSBvZiBzY2FsaW5nIGNvbmZpZ3VyYXRpb24gdGhhdCB5b3Ugd2FudCB0byBxdWVyeS4gVmFsaWQgdmFsdWVzIDogMSB0byAxMC4gVGhlIG5hbWVzIG9mIGluYWN0aXZlIHNjYWxpbmcgY29uZmlndXJhdGlvbnMgYXJlIG5vdCBkaXNwbGF5ZWQgaW4gdGhlIHF1ZXJ5IHJlc3VsdHMsIGFuZCBubyBlcnJvciBpcyByZXBvcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nR3JvdXBJZDogVGhlIElEIG9mIHRoZSBzY2FsaW5nIGdyb3VwLiBZb3UgY2FuIHVzZSB0aGUgSUQgdG8gcXVlcnkgYWxsIHNjYWxpbmcgY29uZmlndXJhdGlvbnMgaW4gdGhlIHNjYWxpbmcgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NhbGluZ0dyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU2NhbGluZ0NvbmZpZ3VyYXRpb25zUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NhbGluZ0dyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2NhbGluZ0dyb3VwSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNjYWxpbmdDb25maWd1cmF0aW9uSWRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zY2FsaW5nQ29uZmlndXJhdGlvbklkcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjYWxpbmdDb25maWd1cmF0aW9uSWRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjYWxpbmdDb25maWd1cmF0aW9uSWRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnNjYWxpbmdDb25maWd1cmF0aW9uSWRzKSk7XG4gICAgaWYocHJvcGVydGllcy5zY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjYWxpbmdDb25maWd1cmF0aW9uTmFtZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjYWxpbmdDb25maWd1cmF0aW9uTmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5zY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6RVNTOjpTY2FsaW5nQ29uZmlndXJhdGlvbnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6RVNTOjpTY2FsaW5nQ29uZmlndXJhdGlvbnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2NhbGluZ0NvbmZpZ3VyYXRpb25zUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NTY2FsaW5nQ29uZmlndXJhdGlvbnNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBTY2FsaW5nQ29uZmlndXJhdGlvbklkczogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHMpLFxuICAgICAgU2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lczogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lcyksXG4gICAgICBTY2FsaW5nR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zY2FsaW5nR3JvdXBJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYERBVEFTT1VSQ0U6OkVTUzo6U2NhbGluZ0NvbmZpZ3VyYXRpb25zYFxuICovXG5leHBvcnQgY2xhc3MgUm9zU2NhbGluZ0NvbmZpZ3VyYXRpb25zIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6RVNTOjpTY2FsaW5nQ29uZmlndXJhdGlvbnNcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTY2FsaW5nQ29uZmlndXJhdGlvbklkczogVGhlIGxpc3Qgb2Ygc2NhbGluZyBjb25maWd1cmF0aW9uIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNjYWxpbmdDb25maWd1cmF0aW9uSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNjYWxpbmdDb25maWd1cmF0aW9uczogVGhlIGxpc3Qgb2Ygc2NhbGluZyBjb25maWd1cmF0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNjYWxpbmdDb25maWd1cmF0aW9uczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHM6IFRoZSBJRCBvZiBzY2FsaW5nIGNvbmZpZ3VyYXRpb24gdGhhdCB5b3Ugd2FudCB0byBxdWVyeS4gVmFsaWQgdmFsdWVzIDogMSB0byAxMC4gVGhlIElEcyBvZiBhY3RpdmUgYW5kIGluYWN0aXZlIHNjYWxpbmcgY29uZmlndXJhdGlvbnMgYXJlIGRpc3BsYXllZCBpbiB0aGUgcXVlcnkgcmVzdWx0cywgYW5kIGNhbiBiZSBkaWZmZXJlbnRpYXRlZCBieSBMaWZlY3ljbGVTdGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lczogVGhlIG5hbWUgb2Ygc2NhbGluZyBjb25maWd1cmF0aW9uIHRoYXQgeW91IHdhbnQgdG8gcXVlcnkuIFZhbGlkIHZhbHVlcyA6IDEgdG8gMTAuIFRoZSBuYW1lcyBvZiBpbmFjdGl2ZSBzY2FsaW5nIGNvbmZpZ3VyYXRpb25zIGFyZSBub3QgZGlzcGxheWVkIGluIHRoZSBxdWVyeSByZXN1bHRzLCBhbmQgbm8gZXJyb3IgaXMgcmVwb3J0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHNjYWxpbmdDb25maWd1cmF0aW9uTmFtZXM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NhbGluZ0dyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgc2NhbGluZyBncm91cC4gWW91IGNhbiB1c2UgdGhlIElEIHRvIHF1ZXJ5IGFsbCBzY2FsaW5nIGNvbmZpZ3VyYXRpb25zIGluIHRoZSBzY2FsaW5nIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBzY2FsaW5nR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpFU1M6OlNjYWxpbmdDb25maWd1cmF0aW9uc2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU2NhbGluZ0NvbmZpZ3VyYXRpb25zUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTY2FsaW5nQ29uZmlndXJhdGlvbnMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clNjYWxpbmdDb25maWd1cmF0aW9uSWRzID0gdGhpcy5nZXRBdHQoJ1NjYWxpbmdDb25maWd1cmF0aW9uSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0clNjYWxpbmdDb25maWd1cmF0aW9ucyA9IHRoaXMuZ2V0QXR0KCdTY2FsaW5nQ29uZmlndXJhdGlvbnMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHMgPSBwcm9wcy5zY2FsaW5nQ29uZmlndXJhdGlvbklkcztcbiAgICAgICAgdGhpcy5zY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzID0gcHJvcHMuc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lcztcbiAgICAgICAgdGhpcy5zY2FsaW5nR3JvdXBJZCA9IHByb3BzLnNjYWxpbmdHcm91cElkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjYWxpbmdDb25maWd1cmF0aW9uSWRzOiB0aGlzLnNjYWxpbmdDb25maWd1cmF0aW9uSWRzLFxuICAgICAgICAgICAgc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lczogdGhpcy5zY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzLFxuICAgICAgICAgICAgc2NhbGluZ0dyb3VwSWQ6IHRoaXMuc2NhbGluZ0dyb3VwSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERBVEFTT1VSQ0U6OkVTUzo6U2NhbGluZ0dyb3Vwc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTY2FsaW5nR3JvdXBzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwVHlwZTogVGhlIHR5cGUgb2YgaW5zdGFuY2VzIHRoYXQgYXJlIG1hbmFnZWQgYnkgdGhlIHNjYWxpbmcgZ3JvdXAuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBFQ1M6IHRoZSBFbGFzdGljIENvbXB1dGUgU2VydmljZSAoRUNTKSBpbnN0YW5jZXNcbiAgICAgKiBFQ0k6IHRoZSBlbGFzdGljIGNvbnRhaW5lciBpbnN0YW5jZXNcbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBFQ1MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNjYWxpbmdHcm91cElkczogVGhlIElEIG9mIHNjYWxpbmcgZ3JvdXAgdGhhdCB5b3Ugd2FudCB0byBxdWVyeS5WYWxpZCB2YWx1ZXM6IDEgdG8gMjAuIFRoZSBJRHMgb2YgaW5hY3RpdmUgc2NhbGluZyBncm91cHMgYXJlIG5vdCBkaXNwbGF5ZWQgaW4gdGhlIHF1ZXJ5IHJlc3VsdHMsIGFuZCBubyBlcnJvciBpcyByZXBvcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzY2FsaW5nR3JvdXBJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNjYWxpbmdHcm91cE5hbWVzOiBUaGUgbmFtZSBvZiBzY2FsaW5nIGdyb3VwIHRoYXQgeW91IHdhbnQgdG8gcXVlcnkuIFZhbGlkIHZhbHVlczogMSB0byAyMC4gVGhlIG5hbWVzIG9mIGluYWN0aXZlIHNjYWxpbmcgZ3JvdXBzIGFyZSBub3QgZGlzcGxheWVkIGluIHRoZSBxdWVyeSByZXN1bHRzLCBhbmQgbm8gZXJyb3IgaXMgcmVwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NhbGluZ0dyb3VwTmFtZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1NjYWxpbmdHcm91cHNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2NhbGluZ0dyb3Vwc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NjYWxpbmdHcm91cHNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNjYWxpbmdHcm91cE5hbWVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2NhbGluZ0dyb3VwTmFtZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zY2FsaW5nR3JvdXBOYW1lcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjYWxpbmdHcm91cE5hbWVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjYWxpbmdHcm91cE5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NhbGluZ0dyb3VwTmFtZXMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnNjYWxpbmdHcm91cE5hbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5zY2FsaW5nR3JvdXBJZHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zY2FsaW5nR3JvdXBJZHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zY2FsaW5nR3JvdXBJZHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2FsaW5nR3JvdXBJZHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2NhbGluZ0dyb3VwSWRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NhbGluZ0dyb3VwSWRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5zY2FsaW5nR3JvdXBJZHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU2NhbGluZ0dyb3Vwc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6RVNTOjpTY2FsaW5nR3JvdXBzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTY2FsaW5nR3JvdXBzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpFU1M6OlNjYWxpbmdHcm91cHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2NhbGluZ0dyb3Vwc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU2NhbGluZ0dyb3Vwc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEdyb3VwVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cFR5cGUpLFxuICAgICAgU2NhbGluZ0dyb3VwSWRzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zY2FsaW5nR3JvdXBJZHMpLFxuICAgICAgU2NhbGluZ0dyb3VwTmFtZXM6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnNjYWxpbmdHcm91cE5hbWVzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgREFUQVNPVVJDRTo6RVNTOjpTY2FsaW5nR3JvdXBzYFxuICovXG5leHBvcnQgY2xhc3MgUm9zU2NhbGluZ0dyb3VwcyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OkVTUzo6U2NhbGluZ0dyb3Vwc1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNjYWxpbmdHcm91cElkczogVGhlIGxpc3Qgb2Ygc2NhbGluZyBncm91cCBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTY2FsaW5nR3JvdXBJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2NhbGluZ0dyb3VwczogVGhlIGxpc3Qgb2Ygc2NhbGluZyBncm91cHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTY2FsaW5nR3JvdXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cFR5cGU6IFRoZSB0eXBlIG9mIGluc3RhbmNlcyB0aGF0IGFyZSBtYW5hZ2VkIGJ5IHRoZSBzY2FsaW5nIGdyb3VwLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogRUNTOiB0aGUgRWxhc3RpYyBDb21wdXRlIFNlcnZpY2UgKEVDUykgaW5zdGFuY2VzXG4gICAgICogRUNJOiB0aGUgZWxhc3RpYyBjb250YWluZXIgaW5zdGFuY2VzXG4gICAgICogRGVmYXVsdCB2YWx1ZTogRUNTLlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nR3JvdXBJZHM6IFRoZSBJRCBvZiBzY2FsaW5nIGdyb3VwIHRoYXQgeW91IHdhbnQgdG8gcXVlcnkuVmFsaWQgdmFsdWVzOiAxIHRvIDIwLiBUaGUgSURzIG9mIGluYWN0aXZlIHNjYWxpbmcgZ3JvdXBzIGFyZSBub3QgZGlzcGxheWVkIGluIHRoZSBxdWVyeSByZXN1bHRzLCBhbmQgbm8gZXJyb3IgaXMgcmVwb3J0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHNjYWxpbmdHcm91cElkczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nR3JvdXBOYW1lczogVGhlIG5hbWUgb2Ygc2NhbGluZyBncm91cCB0aGF0IHlvdSB3YW50IHRvIHF1ZXJ5LiBWYWxpZCB2YWx1ZXM6IDEgdG8gMjAuIFRoZSBuYW1lcyBvZiBpbmFjdGl2ZSBzY2FsaW5nIGdyb3VwcyBhcmUgbm90IGRpc3BsYXllZCBpbiB0aGUgcXVlcnkgcmVzdWx0cywgYW5kIG5vIGVycm9yIGlzIHJlcG9ydGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBzY2FsaW5nR3JvdXBOYW1lczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgREFUQVNPVVJDRTo6RVNTOjpTY2FsaW5nR3JvdXBzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTY2FsaW5nR3JvdXBzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTY2FsaW5nR3JvdXBzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJTY2FsaW5nR3JvdXBJZHMgPSB0aGlzLmdldEF0dCgnU2NhbGluZ0dyb3VwSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0clNjYWxpbmdHcm91cHMgPSB0aGlzLmdldEF0dCgnU2NhbGluZ0dyb3VwcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5ncm91cFR5cGUgPSBwcm9wcy5ncm91cFR5cGU7XG4gICAgICAgIHRoaXMuc2NhbGluZ0dyb3VwSWRzID0gcHJvcHMuc2NhbGluZ0dyb3VwSWRzO1xuICAgICAgICB0aGlzLnNjYWxpbmdHcm91cE5hbWVzID0gcHJvcHMuc2NhbGluZ0dyb3VwTmFtZXM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JvdXBUeXBlOiB0aGlzLmdyb3VwVHlwZSxcbiAgICAgICAgICAgIHNjYWxpbmdHcm91cElkczogdGhpcy5zY2FsaW5nR3JvdXBJZHMsXG4gICAgICAgICAgICBzY2FsaW5nR3JvdXBOYW1lczogdGhpcy5zY2FsaW5nR3JvdXBOYW1lcyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU2NhbGluZ0dyb3Vwc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuIl19