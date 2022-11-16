package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:10.035Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingRule")
public class ScalingRule extends com.aliyun.ros.cdk.core.Resource {

    protected ScalingRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingRule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ScalingRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingRule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ScalingRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ScalingRuleAri: Unique identifier of a scaling rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleAri() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleAri", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ScalingRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ScalingRule> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.ScalingRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ScalingRuleProps.Builder();
        }

        /**
         * Property scalingGroupId: ID of the scaling group of a scaling rule.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: ID of the scaling group of a scaling rule. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: ID of the scaling group of a scaling rule.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: ID of the scaling group of a scaling rule. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property adjustmentType: Adjustment mode of a scaling rule.
         * <p>
         * Optional values:
         * <p>
         * <ul>
         * <li>QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.</li>
         * <li>PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.</li>
         * <li>TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param adjustmentType Property adjustmentType: Adjustment mode of a scaling rule. This parameter is required.
         */
        public Builder adjustmentType(final java.lang.String adjustmentType) {
            this.props.adjustmentType(adjustmentType);
            return this;
        }
        /**
         * Property adjustmentType: Adjustment mode of a scaling rule.
         * <p>
         * Optional values:
         * <p>
         * <ul>
         * <li>QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.</li>
         * <li>PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.</li>
         * <li>TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param adjustmentType Property adjustmentType: Adjustment mode of a scaling rule. This parameter is required.
         */
        public Builder adjustmentType(final com.aliyun.ros.cdk.core.IResolvable adjustmentType) {
            this.props.adjustmentType(adjustmentType);
            return this;
        }

        /**
         * Property adjustmentValue: Adjusted value of a scaling rule.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li>QuantityChangeInCapacity: [-500, 500]</li>
         * <li>PercentChangeInCapacity: [-100, 10000]</li>
         * <li>TotalCapacity: [0, 1000]</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param adjustmentValue Property adjustmentValue: Adjusted value of a scaling rule. This parameter is required.
         */
        public Builder adjustmentValue(final java.lang.Number adjustmentValue) {
            this.props.adjustmentValue(adjustmentValue);
            return this;
        }
        /**
         * Property adjustmentValue: Adjusted value of a scaling rule.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li>QuantityChangeInCapacity: [-500, 500]</li>
         * <li>PercentChangeInCapacity: [-100, 10000]</li>
         * <li>TotalCapacity: [0, 1000]</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param adjustmentValue Property adjustmentValue: Adjusted value of a scaling rule. This parameter is required.
         */
        public Builder adjustmentValue(final com.aliyun.ros.cdk.core.IResolvable adjustmentValue) {
            this.props.adjustmentValue(adjustmentValue);
            return this;
        }

        /**
         * Property cooldown: Cool-down time of a scaling rule.
         * <p>
         * Value range: [0, 86,400], in seconds. The default value is empty.
         * <p>
         * @return {@code this}
         * @param cooldown Property cooldown: Cool-down time of a scaling rule. This parameter is required.
         */
        public Builder cooldown(final java.lang.Number cooldown) {
            this.props.cooldown(cooldown);
            return this;
        }
        /**
         * Property cooldown: Cool-down time of a scaling rule.
         * <p>
         * Value range: [0, 86,400], in seconds. The default value is empty.
         * <p>
         * @return {@code this}
         * @param cooldown Property cooldown: Cool-down time of a scaling rule. This parameter is required.
         */
        public Builder cooldown(final com.aliyun.ros.cdk.core.IResolvable cooldown) {
            this.props.cooldown(cooldown);
            return this;
        }

        /**
         * Property disableScaleIn: Specifies whether to disable scale-in.
         * <p>
         * This parameter is applicable only to target tracking scaling rules.
         * Default value: false
         * <p>
         * @return {@code this}
         * @param disableScaleIn Property disableScaleIn: Specifies whether to disable scale-in. This parameter is required.
         */
        public Builder disableScaleIn(final java.lang.Boolean disableScaleIn) {
            this.props.disableScaleIn(disableScaleIn);
            return this;
        }
        /**
         * Property disableScaleIn: Specifies whether to disable scale-in.
         * <p>
         * This parameter is applicable only to target tracking scaling rules.
         * Default value: false
         * <p>
         * @return {@code this}
         * @param disableScaleIn Property disableScaleIn: Specifies whether to disable scale-in. This parameter is required.
         */
        public Builder disableScaleIn(final com.aliyun.ros.cdk.core.IResolvable disableScaleIn) {
            this.props.disableScaleIn(disableScaleIn);
            return this;
        }

        /**
         * Property estimatedInstanceWarmup: The warm-up period of the ECS instances.
         * <p>
         * This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
         * Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
         * Valid values: 0 to 86400. Unit: seconds. Default value: 300.
         * <p>
         * @return {@code this}
         * @param estimatedInstanceWarmup Property estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is required.
         */
        public Builder estimatedInstanceWarmup(final java.lang.Number estimatedInstanceWarmup) {
            this.props.estimatedInstanceWarmup(estimatedInstanceWarmup);
            return this;
        }
        /**
         * Property estimatedInstanceWarmup: The warm-up period of the ECS instances.
         * <p>
         * This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
         * Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
         * Valid values: 0 to 86400. Unit: seconds. Default value: 300.
         * <p>
         * @return {@code this}
         * @param estimatedInstanceWarmup Property estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is required.
         */
        public Builder estimatedInstanceWarmup(final com.aliyun.ros.cdk.core.IResolvable estimatedInstanceWarmup) {
            this.props.estimatedInstanceWarmup(estimatedInstanceWarmup);
            return this;
        }

        /**
         * Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
         * <p>
         * Default value: the same as the value of MaxSize
         * <p>
         * @return {@code this}
         * @param initialMaxSize Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior. This parameter is required.
         */
        public Builder initialMaxSize(final java.lang.Number initialMaxSize) {
            this.props.initialMaxSize(initialMaxSize);
            return this;
        }
        /**
         * Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
         * <p>
         * Default value: the same as the value of MaxSize
         * <p>
         * @return {@code this}
         * @param initialMaxSize Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior. This parameter is required.
         */
        public Builder initialMaxSize(final com.aliyun.ros.cdk.core.IResolvable initialMaxSize) {
            this.props.initialMaxSize(initialMaxSize);
            return this;
        }

        /**
         * Property metricName: The predefined metric to monitor.
         * <p>
         * This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
         * Valid values of a target tracking scaling rule:
         * <p>
         * <ul>
         * <li>CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network</li>
         * <li>ClassicInternetTx: the average public network outbound traffic over the classic network</li>
         * <li>VpcInternetRx: the average public network inbound traffic over the VPC</li>
         * <li>VpcInternetTx: the average public network outbound traffic over the VPC</li>
         * <li>IntranetRx: the average internal network inbound traffic</li>
         * <li>IntranetTx: the average internal network outbound traffic
         * Valid values of a predictive scaling rule:</li>
         * <li>CpuUtilization: the average CPU utilization</li>
         * <li>IntranetRx: the average internal network inbound traffic</li>
         * <li>IntranetTx: the average internal network outbound traffic</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param metricName Property metricName: The predefined metric to monitor. This parameter is required.
         */
        public Builder metricName(final java.lang.String metricName) {
            this.props.metricName(metricName);
            return this;
        }
        /**
         * Property metricName: The predefined metric to monitor.
         * <p>
         * This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
         * Valid values of a target tracking scaling rule:
         * <p>
         * <ul>
         * <li>CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network</li>
         * <li>ClassicInternetTx: the average public network outbound traffic over the classic network</li>
         * <li>VpcInternetRx: the average public network inbound traffic over the VPC</li>
         * <li>VpcInternetTx: the average public network outbound traffic over the VPC</li>
         * <li>IntranetRx: the average internal network inbound traffic</li>
         * <li>IntranetTx: the average internal network outbound traffic
         * Valid values of a predictive scaling rule:</li>
         * <li>CpuUtilization: the average CPU utilization</li>
         * <li>IntranetRx: the average internal network inbound traffic</li>
         * <li>IntranetTx: the average internal network outbound traffic</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param metricName Property metricName: The predefined metric to monitor. This parameter is required.
         */
        public Builder metricName(final com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.props.metricName(metricName);
            return this;
        }

        /**
         * Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule.
         * <p>
         * This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
         * <p>
         * @return {@code this}
         * @param minAdjustmentMagnitude Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter is required.
         */
        public Builder minAdjustmentMagnitude(final java.lang.Number minAdjustmentMagnitude) {
            this.props.minAdjustmentMagnitude(minAdjustmentMagnitude);
            return this;
        }
        /**
         * Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule.
         * <p>
         * This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
         * <p>
         * @return {@code this}
         * @param minAdjustmentMagnitude Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter is required.
         */
        public Builder minAdjustmentMagnitude(final com.aliyun.ros.cdk.core.IResolvable minAdjustmentMagnitude) {
            this.props.minAdjustmentMagnitude(minAdjustmentMagnitude);
            return this;
        }

        /**
         * Property predictiveScalingMode: The mode of the predictive scaling rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>PredictAndScale: generates forecasts and creates forecast tasks.</li>
         * <li>PredictOnly: generates forecasts but does not create forecast tasks.
         * Default value: PredictAndScale</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param predictiveScalingMode Property predictiveScalingMode: The mode of the predictive scaling rule. This parameter is required.
         */
        public Builder predictiveScalingMode(final java.lang.String predictiveScalingMode) {
            this.props.predictiveScalingMode(predictiveScalingMode);
            return this;
        }
        /**
         * Property predictiveScalingMode: The mode of the predictive scaling rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>PredictAndScale: generates forecasts and creates forecast tasks.</li>
         * <li>PredictOnly: generates forecasts but does not create forecast tasks.
         * Default value: PredictAndScale</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param predictiveScalingMode Property predictiveScalingMode: The mode of the predictive scaling rule. This parameter is required.
         */
        public Builder predictiveScalingMode(final com.aliyun.ros.cdk.core.IResolvable predictiveScalingMode) {
            this.props.predictiveScalingMode(predictiveScalingMode);
            return this;
        }

        /**
         * Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time.
         * <p>
         * By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
         * Default value: 0
         * <p>
         * @return {@code this}
         * @param predictiveTaskBufferTime Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. This parameter is required.
         */
        public Builder predictiveTaskBufferTime(final java.lang.Number predictiveTaskBufferTime) {
            this.props.predictiveTaskBufferTime(predictiveTaskBufferTime);
            return this;
        }
        /**
         * Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time.
         * <p>
         * By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
         * Default value: 0
         * <p>
         * @return {@code this}
         * @param predictiveTaskBufferTime Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. This parameter is required.
         */
        public Builder predictiveTaskBufferTime(final com.aliyun.ros.cdk.core.IResolvable predictiveTaskBufferTime) {
            this.props.predictiveTaskBufferTime(predictiveTaskBufferTime);
            return this;
        }

        /**
         * Property predictiveValueBehavior: The action taken on the predicted maximum value.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
         * <p>
         * <ul>
         * <li>PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.</li>
         * <li>PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
         * Default value: MaxOverridePredictiveValue</li>
         * </ul></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param predictiveValueBehavior Property predictiveValueBehavior: The action taken on the predicted maximum value. This parameter is required.
         */
        public Builder predictiveValueBehavior(final java.lang.String predictiveValueBehavior) {
            this.props.predictiveValueBehavior(predictiveValueBehavior);
            return this;
        }
        /**
         * Property predictiveValueBehavior: The action taken on the predicted maximum value.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
         * <p>
         * <ul>
         * <li>PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.</li>
         * <li>PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
         * Default value: MaxOverridePredictiveValue</li>
         * </ul></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param predictiveValueBehavior Property predictiveValueBehavior: The action taken on the predicted maximum value. This parameter is required.
         */
        public Builder predictiveValueBehavior(final com.aliyun.ros.cdk.core.IResolvable predictiveValueBehavior) {
            this.props.predictiveValueBehavior(predictiveValueBehavior);
            return this;
        }

        /**
         * Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
         * <p>
         * When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
         * Default value: 0
         * <p>
         * @return {@code this}
         * @param predictiveValueBuffer Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. This parameter is required.
         */
        public Builder predictiveValueBuffer(final java.lang.Number predictiveValueBuffer) {
            this.props.predictiveValueBuffer(predictiveValueBuffer);
            return this;
        }
        /**
         * Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
         * <p>
         * When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
         * Default value: 0
         * <p>
         * @return {@code this}
         * @param predictiveValueBuffer Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. This parameter is required.
         */
        public Builder predictiveValueBuffer(final com.aliyun.ros.cdk.core.IResolvable predictiveValueBuffer) {
            this.props.predictiveValueBuffer(predictiveValueBuffer);
            return this;
        }

        /**
         * Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered.
         * <p>
         * After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
         * Default value: 15.
         * <p>
         * @return {@code this}
         * @param scaleInEvaluationCount Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered. This parameter is required.
         */
        public Builder scaleInEvaluationCount(final java.lang.Number scaleInEvaluationCount) {
            this.props.scaleInEvaluationCount(scaleInEvaluationCount);
            return this;
        }
        /**
         * Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered.
         * <p>
         * After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
         * Default value: 15.
         * <p>
         * @return {@code this}
         * @param scaleInEvaluationCount Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered. This parameter is required.
         */
        public Builder scaleInEvaluationCount(final com.aliyun.ros.cdk.core.IResolvable scaleInEvaluationCount) {
            this.props.scaleInEvaluationCount(scaleInEvaluationCount);
            return this;
        }

        /**
         * Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered.
         * <p>
         * After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
         * Default value: 3.
         * <p>
         * @return {@code this}
         * @param scaleOutEvaluationCount Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered. This parameter is required.
         */
        public Builder scaleOutEvaluationCount(final java.lang.Number scaleOutEvaluationCount) {
            this.props.scaleOutEvaluationCount(scaleOutEvaluationCount);
            return this;
        }
        /**
         * Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered.
         * <p>
         * After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
         * Default value: 3.
         * <p>
         * @return {@code this}
         * @param scaleOutEvaluationCount Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered. This parameter is required.
         */
        public Builder scaleOutEvaluationCount(final com.aliyun.ros.cdk.core.IResolvable scaleOutEvaluationCount) {
            this.props.scaleOutEvaluationCount(scaleOutEvaluationCount);
            return this;
        }

        /**
         * Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters.
         * <p>
         * It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
         * <p>
         * @return {@code this}
         * @param scalingRuleName Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. This parameter is required.
         */
        public Builder scalingRuleName(final java.lang.String scalingRuleName) {
            this.props.scalingRuleName(scalingRuleName);
            return this;
        }
        /**
         * Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters.
         * <p>
         * It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
         * <p>
         * @return {@code this}
         * @param scalingRuleName Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. This parameter is required.
         */
        public Builder scalingRuleName(final com.aliyun.ros.cdk.core.IResolvable scalingRuleName) {
            this.props.scalingRuleName(scalingRuleName);
            return this;
        }

        /**
         * Property scalingRuleType: The type of the scaling rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.</li>
         * <li>TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.</li>
         * <li>StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.</li>
         * <li>PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
         * If this parameter value is not specified, the default value is SimpleScalingRule.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param scalingRuleType Property scalingRuleType: The type of the scaling rule. This parameter is required.
         */
        public Builder scalingRuleType(final java.lang.String scalingRuleType) {
            this.props.scalingRuleType(scalingRuleType);
            return this;
        }
        /**
         * Property scalingRuleType: The type of the scaling rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.</li>
         * <li>TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.</li>
         * <li>StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.</li>
         * <li>PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
         * If this parameter value is not specified, the default value is SimpleScalingRule.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param scalingRuleType Property scalingRuleType: The type of the scaling rule. This parameter is required.
         */
        public Builder scalingRuleType(final com.aliyun.ros.cdk.core.IResolvable scalingRuleType) {
            this.props.scalingRuleType(scalingRuleType);
            return this;
        }

        /**
         * Property stepAdjustment:.
         * <p>
         * @return {@code this}
         * @param stepAdjustment Property stepAdjustment:. This parameter is required.
         */
        public Builder stepAdjustment(final com.aliyun.ros.cdk.core.IResolvable stepAdjustment) {
            this.props.stepAdjustment(stepAdjustment);
            return this;
        }
        /**
         * Property stepAdjustment:.
         * <p>
         * @return {@code this}
         * @param stepAdjustment Property stepAdjustment:. This parameter is required.
         */
        public Builder stepAdjustment(final java.util.List<? extends java.lang.Object> stepAdjustment) {
            this.props.stepAdjustment(stepAdjustment);
            return this;
        }

        /**
         * Property targetValue: The target value of a metric.
         * <p>
         * This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
         * <p>
         * @return {@code this}
         * @param targetValue Property targetValue: The target value of a metric. This parameter is required.
         */
        public Builder targetValue(final java.lang.Number targetValue) {
            this.props.targetValue(targetValue);
            return this;
        }
        /**
         * Property targetValue: The target value of a metric.
         * <p>
         * This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
         * <p>
         * @return {@code this}
         * @param targetValue Property targetValue: The target value of a metric. This parameter is required.
         */
        public Builder targetValue(final com.aliyun.ros.cdk.core.IResolvable targetValue) {
            this.props.targetValue(targetValue);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ess.ScalingRule}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.ScalingRule build() {
            return new com.aliyun.ros.cdk.ess.ScalingRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
