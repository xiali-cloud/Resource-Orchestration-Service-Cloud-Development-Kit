"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = exports.RuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const config_generated_1 = require("./config.generated");
Object.defineProperty(exports, "RuleProperty", { enumerable: true, get: function () { return config_generated_1.RosRule; } });
/**
 * A ROS resource type:  `ALIYUN::Config::Rule`
 */
class Rule extends ros.Resource {
    /**
     * Create a new `ALIYUN::Config::Rule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRule = new config_generated_1.RosRule(this, id, {
            tagKeyScope: props.tagKeyScope,
            tagValueScope: props.tagValueScope,
            description: props.description,
            excludeResourceIdsScope: props.excludeResourceIdsScope,
            tagKeyLogicScope: props.tagKeyLogicScope,
            sourceOwner: props.sourceOwner,
            sourceIdentifier: props.sourceIdentifier,
            maximumExecutionFrequency: props.maximumExecutionFrequency,
            regionIdsScope: props.regionIdsScope,
            configRuleTriggerTypes: props.configRuleTriggerTypes,
            resourceGroupIdsScope: props.resourceGroupIdsScope,
            riskLevel: props.riskLevel,
            resourceTypesScope: props.resourceTypesScope,
            ruleName: props.ruleName,
            inputParameters: props.inputParameters,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRule;
        this.attrConfigRuleArn = rosRule.attrConfigRuleArn;
        this.attrConfigRuleId = rosRule.attrConfigRuleId;
        this.attrConfigRuleTriggerTypes = rosRule.attrConfigRuleTriggerTypes;
        this.attrDescription = rosRule.attrDescription;
        this.attrEventSource = rosRule.attrEventSource;
        this.attrExcludeResourceIdsScope = rosRule.attrExcludeResourceIdsScope;
        this.attrInputParameters = rosRule.attrInputParameters;
        this.attrMaximumExecutionFrequency = rosRule.attrMaximumExecutionFrequency;
        this.attrRegionIdsScope = rosRule.attrRegionIdsScope;
        this.attrResourceGroupIdsScope = rosRule.attrResourceGroupIdsScope;
        this.attrResourceTypesScope = rosRule.attrResourceTypesScope;
        this.attrRiskLevel = rosRule.attrRiskLevel;
        this.attrRuleName = rosRule.attrRuleName;
        this.attrSourceIdentifier = rosRule.attrSourceIdentifier;
        this.attrSourceOwner = rosRule.attrSourceOwner;
        this.attrTagKeyScope = rosRule.attrTagKeyScope;
        this.attrTagValueScope = rosRule.attrTagValueScope;
    }
}
exports.Rule = Rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHlEQUE2QztBQUV6Qiw2RkFGWCwwQkFBTyxPQUVnQjtBQW1GaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQTRGbEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFnQixFQUFFLG1DQUEyQyxJQUFJO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxPQUFPLEdBQUcsSUFBSSwwQkFBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDbkMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLHVCQUF1QjtZQUN0RCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyx5QkFBeUI7WUFDMUQsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7WUFDcEQscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1NBQ3pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDO1FBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLDJCQUEyQixHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUN2RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyw2QkFBNkIsR0FBRyxPQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDM0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ25FLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUExSUQsb0JBMElDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUnVsZSB9IGZyb20gJy4vY29uZmlnLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1J1bGUgYXMgUnVsZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDb25maWc6OlJ1bGVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUnVsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbmZpZ1J1bGVUcmlnZ2VyVHlwZXM6IFRoZSB0cmlnZ2VyIHR5cGUgb2YgdGhlIHJ1bGUuIFZhbGlkIHZhbHVlczogIENvbmZpZ3VyYXRpb25JdGVtQ2hhbmdlTm90aWZpY2F0aW9uOiBUaGUgcnVsZSBpcyB0cmlnZ2VyZWQgdXBvbiBjb25maWd1cmF0aW9uIGNoYW5nZXMuIFNjaGVkdWxlZE5vdGlmaWNhdGlvbjogVGhlIHJ1bGUgaXMgdHJpZ2dlcmVkIGFzIHNjaGVkdWxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb25maWdSdWxlVHJpZ2dlclR5cGVzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZVR5cGVzU2NvcGU6IFRoZSB0eXBlcyBvZiB0aGUgcmVzb3VyY2VzIHRvIGJlIGV2YWx1YXRlZCBhZ2FpbnN0IHRoZSBydWxlXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VUeXBlc1Njb3BlOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmlza0xldmVsOiBUaGUgcmlzayBsZXZlbCBvZiB0aGUgcmVzb3VyY2VzIHRoYXQgYXJlIG5vdCBjb21wbGlhbnQgd2l0aCB0aGUgcnVsZS4gVmFsaWQgdmFsdWVzOiAgMTogY3JpdGljYWwgMjogd2FybmluZyAzOiBpbmZvXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmlza0xldmVsOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBydWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZUlkZW50aWZpZXI6IFRoZSBpZGVudGlmaWVyIG9mIHRoZSBydWxlLiAgRm9yIGEgbWFuYWdlZCBydWxlLCB0aGUgdmFsdWUgaXMgdGhlIG5hbWUgb2YgdGhlIG1hbmFnZWQgcnVsZS4gRm9yIGEgY3VzdG9tIHJ1bGUsIHRoZSB2YWx1ZSBpcyB0aGUgQVJOIG9mIHRoZSBjdXN0b20gcnVsZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZUlkZW50aWZpZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZU93bmVyOiBTcGVjaWZpZXMgd2hldGhlciB5b3Ugb3IgQWxpYmFiYSBDbG91ZCBvd25zIGFuZCBtYW5hZ2VzIHRoZSBydWxlLiBWYWxpZCB2YWx1ZXM6ICBDVVNUT01fRkM6IFRoZSBydWxlIGlzIGEgY3VzdG9tIHJ1bGUgYW5kIHlvdSBvd24gdGhlIHJ1bGUuIEFMSVlVTjogVGhlIHJ1bGUgaXMgYSBtYW5hZ2VkIHJ1bGUgYW5kIEFsaWJhYmEgQ2xvdWQgb3ducyB0aGUgcnVsZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZU93bmVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBydWxlXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBleGNsdWRlUmVzb3VyY2VJZHNTY29wZTogVGhlIHJ1bGUgbW9uaXRvcnMgZXhjbHVkZWQgcmVzb3VyY2UgSURzLCBtdWx0aXBsZSBvZiB3aGljaCBhcmUgc2VwYXJhdGVkIGJ5IGNvbW1hcywgb25seSBhcHBsaWVzIHRvIHJ1bGVzIGNyZWF0ZWQgYmFzZWQgb24gbWFuYWdlZCBydWxlcywgLCBjdXN0b20gcnVsZSB0aGlzIGZpZWxkIGlzIGVtcHR5XG4gICAgICovXG4gICAgcmVhZG9ubHkgZXhjbHVkZVJlc291cmNlSWRzU2NvcGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnB1dFBhcmFtZXRlcnM6IFRoZSBzZXR0aW5ncyBvZiB0aGUgaW5wdXQgcGFyYW1ldGVycyBmb3IgdGhlIHJ1bGVcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnB1dFBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXhpbXVtRXhlY3V0aW9uRnJlcXVlbmN5OiBUaGUgZnJlcXVlbmN5IG9mIHRoZSBjb21wbGlhbmNlIGV2YWx1YXRpb25zLiBWYWxpZCB2YWx1ZXM6ICBPbmVfSG91ciBUaHJlZV9Ib3VycyBTaXhfSG91cnMgVHdlbHZlX0hvdXJzIFR3ZW50eUZvdXJfSG91cnNcbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhpbXVtRXhlY3V0aW9uRnJlcXVlbmN5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVnaW9uSWRzU2NvcGU6IFRoZSBydWxlIG1vbml0b3JzIHJlZ2lvbiBJRHMsIHNlcGFyYXRlZCBieSBjb21tYXMsIG9ubHkgYXBwbGllcyB0byBydWxlcyBjcmVhdGVkIGJhc2VkIG9uIG1hbmFnZWQgcnVsZXNcbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25JZHNTY29wZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZHNTY29wZTogVGhlIHJ1bGUgbW9uaXRvcnMgcmVzb3VyY2UgZ3JvdXAgSURzLCBzZXBhcmF0ZWQgYnkgY29tbWFzLCBvbmx5IGFwcGxpZXMgdG8gcnVsZXMgY3JlYXRlZCBiYXNlZCBvbiBtYW5hZ2VkIHJ1bGVzXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkc1Njb3BlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnS2V5TG9naWNTY29wZTpcbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdLZXlMb2dpY1Njb3BlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnS2V5U2NvcGU6IFRoZSBydWxlIG1vbml0b3JzIHRoZSB0YWcga2V5LCBvbmx5IGFwcGxpZXMgdG8gcnVsZXMgY3JlYXRlZCBiYXNlZCBvbiBtYW5hZ2VkIHJ1bGVzXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFnS2V5U2NvcGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdWYWx1ZVNjb3BlOiBUaGUgcnVsZSBtb25pdG9ycyB0aGUgdGFnIHZhbHVlLCBvbmx5IGFwcGxpZXMgdG8gcnVsZXMgY3JlYXRlZCBiYXNlZCBvbiBtYW5hZ2VkIHJ1bGVzXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFnVmFsdWVTY29wZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q29uZmlnOjpSdWxlYFxuICovXG5leHBvcnQgY2xhc3MgUnVsZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29uZmlnUnVsZUFybjogY29uZmlnIHJ1bGUgYXJuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb25maWdSdWxlQXJuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29uZmlnUnVsZUlkOiBUaGUgSUQgb2YgdGhlIHJ1bGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbmZpZ1J1bGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbmZpZ1J1bGVUcmlnZ2VyVHlwZXM6IFRoZSB0cmlnZ2VyIHR5cGUgb2YgdGhlIHJ1bGUuIFZhbGlkIHZhbHVlczogIENvbmZpZ3VyYXRpb25JdGVtQ2hhbmdlTm90aWZpY2F0aW9uOiBUaGUgcnVsZSBpcyB0cmlnZ2VyZWQgdXBvbiBjb25maWd1cmF0aW9uIGNoYW5nZXMuIFNjaGVkdWxlZE5vdGlmaWNhdGlvbjogVGhlIHJ1bGUgaXMgdHJpZ2dlcmVkIGFzIHNjaGVkdWxlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbmZpZ1J1bGVUcmlnZ2VyVHlwZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBydWxlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEV2ZW50U291cmNlOiBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBydWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRXZlbnRTb3VyY2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFeGNsdWRlUmVzb3VyY2VJZHNTY29wZTogVGhlIHJ1bGUgbW9uaXRvcnMgZXhjbHVkZWQgcmVzb3VyY2UgSURzLCBtdWx0aXBsZSBvZiB3aGljaCBhcmUgc2VwYXJhdGVkIGJ5IGNvbW1hcywgb25seSBhcHBsaWVzIHRvIHJ1bGVzIGNyZWF0ZWQgYmFzZWQgb24gbWFuYWdlZCBydWxlcywgLCBjdXN0b20gcnVsZSB0aGlzIGZpZWxkIGlzIGVtcHR5XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFeGNsdWRlUmVzb3VyY2VJZHNTY29wZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIElucHV0UGFyYW1ldGVyczogVGhlIHNldHRpbmdzIG9mIHRoZSBpbnB1dCBwYXJhbWV0ZXJzIGZvciB0aGUgcnVsZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5wdXRQYXJhbWV0ZXJzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWF4aW11bUV4ZWN1dGlvbkZyZXF1ZW5jeTogVGhlIGZyZXF1ZW5jeSBvZiB0aGUgY29tcGxpYW5jZSBldmFsdWF0aW9ucy4gVmFsaWQgdmFsdWVzOiAgT25lX0hvdXIgVGhyZWVfSG91cnMgU2l4X0hvdXJzIFR3ZWx2ZV9Ib3VycyBUd2VudHlGb3VyX0hvdXJzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXhpbXVtRXhlY3V0aW9uRnJlcXVlbmN5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVnaW9uSWRzU2NvcGU6IFRoZSBydWxlIG1vbml0b3JzIHJlZ2lvbiBJRHMsIHNlcGFyYXRlZCBieSBjb21tYXMsIG9ubHkgYXBwbGllcyB0byBydWxlcyBjcmVhdGVkIGJhc2VkIG9uIG1hbmFnZWQgcnVsZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlZ2lvbklkc1Njb3BlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkc1Njb3BlOiBUaGUgcnVsZSBtb25pdG9ycyByZXNvdXJjZSBncm91cCBJRHMsIHNlcGFyYXRlZCBieSBjb21tYXMsIG9ubHkgYXBwbGllcyB0byBydWxlcyBjcmVhdGVkIGJhc2VkIG9uIG1hbmFnZWQgcnVsZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlR3JvdXBJZHNTY29wZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlVHlwZXNTY29wZTogVGhlIHR5cGVzIG9mIHRoZSByZXNvdXJjZXMgdG8gYmUgZXZhbHVhdGVkIGFnYWluc3QgdGhlIHJ1bGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlVHlwZXNTY29wZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJpc2tMZXZlbDogVGhlIHJpc2sgbGV2ZWwgb2YgdGhlIHJlc291cmNlcyB0aGF0IGFyZSBub3QgY29tcGxpYW50IHdpdGggdGhlIHJ1bGUuIFZhbGlkIHZhbHVlczogIDE6IGNyaXRpY2FsIDI6IHdhcm5pbmcgMzogaW5mb1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmlza0xldmVsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUnVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBydWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUnVsZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTb3VyY2VJZGVudGlmaWVyOiBUaGUgaWRlbnRpZmllciBvZiB0aGUgcnVsZS4gIEZvciBhIG1hbmFnZWQgcnVsZSwgdGhlIHZhbHVlIGlzIHRoZSBuYW1lIG9mIHRoZSBtYW5hZ2VkIHJ1bGUuIEZvciBhIGN1c3RvbSBydWxlLCB0aGUgdmFsdWUgaXMgdGhlIEFSTiBvZiB0aGUgY3VzdG9tIHJ1bGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNvdXJjZUlkZW50aWZpZXI6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTb3VyY2VPd25lcjogU3BlY2lmaWVzIHdoZXRoZXIgeW91IG9yIEFsaWJhYmEgQ2xvdWQgb3ducyBhbmQgbWFuYWdlcyB0aGUgcnVsZS4gVmFsaWQgdmFsdWVzOiAgQ1VTVE9NX0ZDOiBUaGUgcnVsZSBpcyBhIGN1c3RvbSBydWxlIGFuZCB5b3Ugb3duIHRoZSBydWxlLiBBTElZVU46IFRoZSBydWxlIGlzIGEgbWFuYWdlZCBydWxlIGFuZCBBbGliYWJhIENsb3VkIG93bnMgdGhlIHJ1bGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNvdXJjZU93bmVyOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGFnS2V5U2NvcGU6IFRoZSBydWxlIG1vbml0b3JzIHRoZSB0YWcga2V5LCBvbmx5IGFwcGxpZXMgdG8gcnVsZXMgY3JlYXRlZCBiYXNlZCBvbiBtYW5hZ2VkIHJ1bGVzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYWdLZXlTY29wZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRhZ1ZhbHVlU2NvcGU6IFRoZSBydWxlIG1vbml0b3JzIHRoZSB0YWcgdmFsdWUsIG9ubHkgYXBwbGllcyB0byBydWxlcyBjcmVhdGVkIGJhc2VkIG9uIG1hbmFnZWQgcnVsZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhZ1ZhbHVlU2NvcGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDb25maWc6OlJ1bGVgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJ1bGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NSdWxlID0gbmV3IFJvc1J1bGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICB0YWdLZXlTY29wZTogcHJvcHMudGFnS2V5U2NvcGUsXG4gICAgICAgICAgICB0YWdWYWx1ZVNjb3BlOiBwcm9wcy50YWdWYWx1ZVNjb3BlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZXhjbHVkZVJlc291cmNlSWRzU2NvcGU6IHByb3BzLmV4Y2x1ZGVSZXNvdXJjZUlkc1Njb3BlLFxuICAgICAgICAgICAgdGFnS2V5TG9naWNTY29wZTogcHJvcHMudGFnS2V5TG9naWNTY29wZSxcbiAgICAgICAgICAgIHNvdXJjZU93bmVyOiBwcm9wcy5zb3VyY2VPd25lcixcbiAgICAgICAgICAgIHNvdXJjZUlkZW50aWZpZXI6IHByb3BzLnNvdXJjZUlkZW50aWZpZXIsXG4gICAgICAgICAgICBtYXhpbXVtRXhlY3V0aW9uRnJlcXVlbmN5OiBwcm9wcy5tYXhpbXVtRXhlY3V0aW9uRnJlcXVlbmN5LFxuICAgICAgICAgICAgcmVnaW9uSWRzU2NvcGU6IHByb3BzLnJlZ2lvbklkc1Njb3BlLFxuICAgICAgICAgICAgY29uZmlnUnVsZVRyaWdnZXJUeXBlczogcHJvcHMuY29uZmlnUnVsZVRyaWdnZXJUeXBlcyxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZHNTY29wZTogcHJvcHMucmVzb3VyY2VHcm91cElkc1Njb3BlLFxuICAgICAgICAgICAgcmlza0xldmVsOiBwcm9wcy5yaXNrTGV2ZWwsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGVzU2NvcGU6IHByb3BzLnJlc291cmNlVHlwZXNTY29wZSxcbiAgICAgICAgICAgIHJ1bGVOYW1lOiBwcm9wcy5ydWxlTmFtZSxcbiAgICAgICAgICAgIGlucHV0UGFyYW1ldGVyczogcHJvcHMuaW5wdXRQYXJhbWV0ZXJzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1J1bGU7XG4gICAgICAgIHRoaXMuYXR0ckNvbmZpZ1J1bGVBcm4gPSByb3NSdWxlLmF0dHJDb25maWdSdWxlQXJuO1xuICAgICAgICB0aGlzLmF0dHJDb25maWdSdWxlSWQgPSByb3NSdWxlLmF0dHJDb25maWdSdWxlSWQ7XG4gICAgICAgIHRoaXMuYXR0ckNvbmZpZ1J1bGVUcmlnZ2VyVHlwZXMgPSByb3NSdWxlLmF0dHJDb25maWdSdWxlVHJpZ2dlclR5cGVzO1xuICAgICAgICB0aGlzLmF0dHJEZXNjcmlwdGlvbiA9IHJvc1J1bGUuYXR0ckRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmF0dHJFdmVudFNvdXJjZSA9IHJvc1J1bGUuYXR0ckV2ZW50U291cmNlO1xuICAgICAgICB0aGlzLmF0dHJFeGNsdWRlUmVzb3VyY2VJZHNTY29wZSA9IHJvc1J1bGUuYXR0ckV4Y2x1ZGVSZXNvdXJjZUlkc1Njb3BlO1xuICAgICAgICB0aGlzLmF0dHJJbnB1dFBhcmFtZXRlcnMgPSByb3NSdWxlLmF0dHJJbnB1dFBhcmFtZXRlcnM7XG4gICAgICAgIHRoaXMuYXR0ck1heGltdW1FeGVjdXRpb25GcmVxdWVuY3kgPSByb3NSdWxlLmF0dHJNYXhpbXVtRXhlY3V0aW9uRnJlcXVlbmN5O1xuICAgICAgICB0aGlzLmF0dHJSZWdpb25JZHNTY29wZSA9IHJvc1J1bGUuYXR0clJlZ2lvbklkc1Njb3BlO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZUdyb3VwSWRzU2NvcGUgPSByb3NSdWxlLmF0dHJSZXNvdXJjZUdyb3VwSWRzU2NvcGU7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlVHlwZXNTY29wZSA9IHJvc1J1bGUuYXR0clJlc291cmNlVHlwZXNTY29wZTtcbiAgICAgICAgdGhpcy5hdHRyUmlza0xldmVsID0gcm9zUnVsZS5hdHRyUmlza0xldmVsO1xuICAgICAgICB0aGlzLmF0dHJSdWxlTmFtZSA9IHJvc1J1bGUuYXR0clJ1bGVOYW1lO1xuICAgICAgICB0aGlzLmF0dHJTb3VyY2VJZGVudGlmaWVyID0gcm9zUnVsZS5hdHRyU291cmNlSWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy5hdHRyU291cmNlT3duZXIgPSByb3NSdWxlLmF0dHJTb3VyY2VPd25lcjtcbiAgICAgICAgdGhpcy5hdHRyVGFnS2V5U2NvcGUgPSByb3NSdWxlLmF0dHJUYWdLZXlTY29wZTtcbiAgICAgICAgdGhpcy5hdHRyVGFnVmFsdWVTY29wZSA9IHJvc1J1bGUuYXR0clRhZ1ZhbHVlU2NvcGU7XG4gICAgfVxufVxuIl19