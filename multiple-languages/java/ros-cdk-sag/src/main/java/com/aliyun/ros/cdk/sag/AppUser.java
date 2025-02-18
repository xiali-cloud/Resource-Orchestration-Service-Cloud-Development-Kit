package com.aliyun.ros.cdk.sag;

/**
 * A ROS resource type:  <code>ALIYUN::SAG::AppUser</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.126Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.AppUser")
public class AppUser extends com.aliyun.ros.cdk.core.Resource {

    protected AppUser(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AppUser(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::SAG::AppUser</code>.
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
    public AppUser(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.AppUserProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::SAG::AppUser</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AppUser(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.AppUserProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SmartAGId: The ID of the SAG APP instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSmartAgId() {
        return software.amazon.jsii.Kernel.get(this, "attrSmartAgId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UserName: &lt;heat.engine.properties.Schema object at 0x7f789e4ada90&gt;.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserName() {
        return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.AppUser}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.AppUser> {
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
        private final com.aliyun.ros.cdk.sag.AppUserProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.AppUserProps.Builder();
        }

        /**
         * Property bandwidth: The bandwidth.
         * <p>
         * Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The bandwidth.
         * <p>
         * Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property smartAgId: The ID of the SAG APP instance.
         * <p>
         * @return {@code this}
         * @param smartAgId Property smartAgId: The ID of the SAG APP instance. This parameter is required.
         */
        public Builder smartAgId(final java.lang.String smartAgId) {
            this.props.smartAgId(smartAgId);
            return this;
        }
        /**
         * Property smartAgId: The ID of the SAG APP instance.
         * <p>
         * @return {@code this}
         * @param smartAgId Property smartAgId: The ID of the SAG APP instance. This parameter is required.
         */
        public Builder smartAgId(final com.aliyun.ros.cdk.core.IResolvable smartAgId) {
            this.props.smartAgId(smartAgId);
            return this;
        }

        /**
         * Property userMail: The email address of the user.
         * <p>
         * The username and password are sent to the specified
         * email address.
         * <p>
         * @return {@code this}
         * @param userMail Property userMail: The email address of the user. This parameter is required.
         */
        public Builder userMail(final java.lang.String userMail) {
            this.props.userMail(userMail);
            return this;
        }
        /**
         * Property userMail: The email address of the user.
         * <p>
         * The username and password are sent to the specified
         * email address.
         * <p>
         * @return {@code this}
         * @param userMail Property userMail: The email address of the user. This parameter is required.
         */
        public Builder userMail(final com.aliyun.ros.cdk.core.IResolvable userMail) {
            this.props.userMail(userMail);
            return this;
        }

        /**
         * Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP.
         * <p>
         * In this
         * case, SAG APP connects to Alibaba Cloud through the specified IP address.
         * Note The IP address must fall into the CIDR block of the private network.
         * After this feature is disabled, an IP address within the CIDR block of the private
         * network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
         * IP address.
         * <p>
         * @return {@code this}
         * @param clientIp Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP. This parameter is required.
         */
        public Builder clientIp(final java.lang.String clientIp) {
            this.props.clientIp(clientIp);
            return this;
        }
        /**
         * Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP.
         * <p>
         * In this
         * case, SAG APP connects to Alibaba Cloud through the specified IP address.
         * Note The IP address must fall into the CIDR block of the private network.
         * After this feature is disabled, an IP address within the CIDR block of the private
         * network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
         * IP address.
         * <p>
         * @return {@code this}
         * @param clientIp Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP. This parameter is required.
         */
        public Builder clientIp(final com.aliyun.ros.cdk.core.IResolvable clientIp) {
            this.props.clientIp(clientIp);
            return this;
        }

        /**
         * Property disable: Disable user or not.
         * <p>
         * @return {@code this}
         * @param disable Property disable: Disable user or not. This parameter is required.
         */
        public Builder disable(final java.lang.Boolean disable) {
            this.props.disable(disable);
            return this;
        }
        /**
         * Property disable: Disable user or not.
         * <p>
         * @return {@code this}
         * @param disable Property disable: Disable user or not. This parameter is required.
         */
        public Builder disable(final com.aliyun.ros.cdk.core.IResolvable disable) {
            this.props.disable(disable);
            return this;
        }

        /**
         * Property password: The password used to log on to SAG APP.
         * <p>
         * For a client account, if you specify the username, you must also specify the password.
         * <p>
         * @return {@code this}
         * @param password Property password: The password used to log on to SAG APP. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: The password used to log on to SAG APP.
         * <p>
         * For a client account, if you specify the username, you must also specify the password.
         * <p>
         * @return {@code this}
         * @param password Property password: The password used to log on to SAG APP. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property userName: The username of the client account.
         * <p>
         * Usernames of client accounts added to the same
         * SAG APP instance must be unique.
         * For a client account, if you specify the username, you must also specify the password.
         * <p>
         * @return {@code this}
         * @param userName Property userName: The username of the client account. This parameter is required.
         */
        public Builder userName(final java.lang.String userName) {
            this.props.userName(userName);
            return this;
        }
        /**
         * Property userName: The username of the client account.
         * <p>
         * Usernames of client accounts added to the same
         * SAG APP instance must be unique.
         * For a client account, if you specify the username, you must also specify the password.
         * <p>
         * @return {@code this}
         * @param userName Property userName: The username of the client account. This parameter is required.
         */
        public Builder userName(final com.aliyun.ros.cdk.core.IResolvable userName) {
            this.props.userName(userName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sag.AppUser}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.AppUser build() {
            return new com.aliyun.ros.cdk.sag.AppUser(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
