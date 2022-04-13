package com.aliyun.ros.cdk.sag;

/**
 * A ROS resource type:  `ALIYUN::SAG::QosCar`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:15.940Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.QosCar")
public class QosCar extends com.aliyun.ros.cdk.core.Resource {

    protected QosCar(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected QosCar(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SAG::QosCar`.
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
    public QosCar(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.QosCarProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SAG::QosCar`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public QosCar(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.QosCarProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute QosCarId: The ID of the traffic throttling policy.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQosCarId() {
        return software.amazon.jsii.Kernel.get(this, "attrQosCarId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.QosCar}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.QosCar> {
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
        private final com.aliyun.ros.cdk.sag.QosCarProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.QosCarProps.Builder();
        }

        /**
         * Property limitType: The type of the traffic throttling policy.
         * <p>
         * Valid values:
         * Absolute: throttles traffic by a specific bandwidth range.
         * Percent: throttles traffic by a specific range of bandwidth percentage.
         * <p>
         * @return {@code this}
         * @param limitType Property limitType: The type of the traffic throttling policy. This parameter is required.
         */
        public Builder limitType(final java.lang.String limitType) {
            this.props.limitType(limitType);
            return this;
        }
        /**
         * Property limitType: The type of the traffic throttling policy.
         * <p>
         * Valid values:
         * Absolute: throttles traffic by a specific bandwidth range.
         * Percent: throttles traffic by a specific range of bandwidth percentage.
         * <p>
         * @return {@code this}
         * @param limitType Property limitType: The type of the traffic throttling policy. This parameter is required.
         */
        public Builder limitType(final com.aliyun.ros.cdk.core.IResolvable limitType) {
            this.props.limitType(limitType);
            return this;
        }

        /**
         * Property priority: The priority of the traffic throttling policy.
         * <p>
         * A smaller value represents a higher
         * priority. If policies are assigned the same priority, the one applied the earliest
         * prevails. Valid values: 1 to 7.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the traffic throttling policy. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The priority of the traffic throttling policy.
         * <p>
         * A smaller value represents a higher
         * priority. If policies are assigned the same priority, the one applied the earliest
         * prevails. Valid values: 1 to 7.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the traffic throttling policy. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property qosId: The ID of the QoS policy.
         * <p>
         * @return {@code this}
         * @param qosId Property qosId: The ID of the QoS policy. This parameter is required.
         */
        public Builder qosId(final java.lang.String qosId) {
            this.props.qosId(qosId);
            return this;
        }
        /**
         * Property qosId: The ID of the QoS policy.
         * <p>
         * @return {@code this}
         * @param qosId Property qosId: The ID of the QoS policy. This parameter is required.
         */
        public Builder qosId(final com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.props.qosId(qosId);
            return this;
        }

        /**
         * Property description: The description of the traffic throttling policy.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the traffic throttling policy. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the traffic throttling policy.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the traffic throttling policy. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property maxBandwidthAbs: The maximum bandwidth.
         * <p>
         * This parameter is required when LimitType is set to Absolute.
         * <p>
         * @return {@code this}
         * @param maxBandwidthAbs Property maxBandwidthAbs: The maximum bandwidth. This parameter is required.
         */
        public Builder maxBandwidthAbs(final java.lang.Number maxBandwidthAbs) {
            this.props.maxBandwidthAbs(maxBandwidthAbs);
            return this;
        }
        /**
         * Property maxBandwidthAbs: The maximum bandwidth.
         * <p>
         * This parameter is required when LimitType is set to Absolute.
         * <p>
         * @return {@code this}
         * @param maxBandwidthAbs Property maxBandwidthAbs: The maximum bandwidth. This parameter is required.
         */
        public Builder maxBandwidthAbs(final com.aliyun.ros.cdk.core.IResolvable maxBandwidthAbs) {
            this.props.maxBandwidthAbs(maxBandwidthAbs);
            return this;
        }

        /**
         * Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG instance.
         * <p>
         * This parameter is required when LimitType is set to Percent.
         * <p>
         * @return {@code this}
         * @param maxBandwidthPercent Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG instance. This parameter is required.
         */
        public Builder maxBandwidthPercent(final java.lang.Number maxBandwidthPercent) {
            this.props.maxBandwidthPercent(maxBandwidthPercent);
            return this;
        }
        /**
         * Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG instance.
         * <p>
         * This parameter is required when LimitType is set to Percent.
         * <p>
         * @return {@code this}
         * @param maxBandwidthPercent Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG instance. This parameter is required.
         */
        public Builder maxBandwidthPercent(final com.aliyun.ros.cdk.core.IResolvable maxBandwidthPercent) {
            this.props.maxBandwidthPercent(maxBandwidthPercent);
            return this;
        }

        /**
         * Property minBandwidthAbs: The minimum bandwidth.
         * <p>
         * This parameter is required when LimitType is set to Absolute.
         * <p>
         * @return {@code this}
         * @param minBandwidthAbs Property minBandwidthAbs: The minimum bandwidth. This parameter is required.
         */
        public Builder minBandwidthAbs(final java.lang.Number minBandwidthAbs) {
            this.props.minBandwidthAbs(minBandwidthAbs);
            return this;
        }
        /**
         * Property minBandwidthAbs: The minimum bandwidth.
         * <p>
         * This parameter is required when LimitType is set to Absolute.
         * <p>
         * @return {@code this}
         * @param minBandwidthAbs Property minBandwidthAbs: The minimum bandwidth. This parameter is required.
         */
        public Builder minBandwidthAbs(final com.aliyun.ros.cdk.core.IResolvable minBandwidthAbs) {
            this.props.minBandwidthAbs(minBandwidthAbs);
            return this;
        }

        /**
         * Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG instance.
         * <p>
         * This parameter is required when LimitType is set to Percent.
         * <p>
         * @return {@code this}
         * @param minBandwidthPercent Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG instance. This parameter is required.
         */
        public Builder minBandwidthPercent(final java.lang.Number minBandwidthPercent) {
            this.props.minBandwidthPercent(minBandwidthPercent);
            return this;
        }
        /**
         * Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG instance.
         * <p>
         * This parameter is required when LimitType is set to Percent.
         * <p>
         * @return {@code this}
         * @param minBandwidthPercent Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG instance. This parameter is required.
         */
        public Builder minBandwidthPercent(final com.aliyun.ros.cdk.core.IResolvable minBandwidthPercent) {
            this.props.minBandwidthPercent(minBandwidthPercent);
            return this;
        }

        /**
         * Property name: The name of the traffic throttling policy.
         * <p>
         * The name must be 2 to 128 characters in
         * length, and can contain Chinese characters, letters, digits, periods (.), underscores
         * (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the traffic throttling policy. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the traffic throttling policy.
         * <p>
         * The name must be 2 to 128 characters in
         * length, and can contain Chinese characters, letters, digits, periods (.), underscores
         * (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the traffic throttling policy. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
         * <p>
         * InternetUpBandwidth: Internet upstream bandwidth.
         * <p>
         * @return {@code this}
         * @param percentSourceType Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth. This parameter is required.
         */
        public Builder percentSourceType(final java.lang.String percentSourceType) {
            this.props.percentSourceType(percentSourceType);
            return this;
        }
        /**
         * Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
         * <p>
         * InternetUpBandwidth: Internet upstream bandwidth.
         * <p>
         * @return {@code this}
         * @param percentSourceType Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth. This parameter is required.
         */
        public Builder percentSourceType(final com.aliyun.ros.cdk.core.IResolvable percentSourceType) {
            this.props.percentSourceType(percentSourceType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sag.QosCar}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.QosCar build() {
            return new com.aliyun.ros.cdk.sag.QosCar(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
