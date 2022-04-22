package com.aliyun.ros.cdk.pvtz;

/**
 * A ROS resource type:  `ALIYUN::PVTZ::ZoneRecord`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:41.193Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.ZoneRecord")
public class ZoneRecord extends com.aliyun.ros.cdk.core.Resource {

    protected ZoneRecord(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ZoneRecord(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::PVTZ::ZoneRecord`.
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
    public ZoneRecord(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.ZoneRecordProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::PVTZ::ZoneRecord`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ZoneRecord(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.ZoneRecordProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Record: Record data.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRecord() {
        return software.amazon.jsii.Kernel.get(this, "attrRecord", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RecordId: Parsing record Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRecordId() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneId: Zone ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pvtz.ZoneRecord}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pvtz.ZoneRecord> {
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
        private final com.aliyun.ros.cdk.pvtz.ZoneRecordProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pvtz.ZoneRecordProps.Builder();
        }

        /**
         * Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.
         * <p>
         * @return {@code this}
         * @param rr Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty. This parameter is required.
         */
        public Builder rr(final java.lang.String rr) {
            this.props.rr(rr);
            return this;
        }
        /**
         * Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.
         * <p>
         * @return {@code this}
         * @param rr Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty. This parameter is required.
         */
        public Builder rr(final com.aliyun.ros.cdk.core.IResolvable rr) {
            this.props.rr(rr);
            return this;
        }

        /**
         * Property status: Allowed values: [ENABLE, DISABLE].
         * <p>
         * @return {@code this}
         * @param status Property status: Allowed values: [ENABLE, DISABLE]. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: Allowed values: [ENABLE, DISABLE].
         * <p>
         * @return {@code this}
         * @param status Property status: Allowed values: [ENABLE, DISABLE]. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.
         * <p>
         * @return {@code this}
         * @param type Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.
         * <p>
         * @return {@code this}
         * @param type Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property value: Record value.
         * <p>
         * @return {@code this}
         * @param value Property value: Record value. This parameter is required.
         */
        public Builder value(final java.lang.String value) {
            this.props.value(value);
            return this;
        }
        /**
         * Property value: Record value.
         * <p>
         * @return {@code this}
         * @param value Property value: Record value. This parameter is required.
         */
        public Builder value(final com.aliyun.ros.cdk.core.IResolvable value) {
            this.props.value(value);
            return this;
        }

        /**
         * Property zoneId: Zone Id.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone Id. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Zone Id.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone Id. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property priority: MX record priority, value range [1,99].
         * <p>
         * Default to 10.
         * <p>
         * @return {@code this}
         * @param priority Property priority: MX record priority, value range [1,99]. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: MX record priority, value range [1,99].
         * <p>
         * Default to 10.
         * <p>
         * @return {@code this}
         * @param priority Property priority: MX record priority, value range [1,99]. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property ttl: Survival time, default is 60.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: Survival time, default is 60. This parameter is required.
         */
        public Builder ttl(final java.lang.Number ttl) {
            this.props.ttl(ttl);
            return this;
        }
        /**
         * Property ttl: Survival time, default is 60.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: Survival time, default is 60. This parameter is required.
         */
        public Builder ttl(final com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.props.ttl(ttl);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.pvtz.ZoneRecord}.
         */
        @Override
        public com.aliyun.ros.cdk.pvtz.ZoneRecord build() {
            return new com.aliyun.ros.cdk.pvtz.ZoneRecord(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
