package com.aliyun.ros.cdk.vod;

/**
 * A ROS resource type:  <code>ALIYUN::VOD::MessageCallback</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.486Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.MessageCallback")
public class MessageCallback extends com.aliyun.ros.cdk.core.Resource {

    protected MessageCallback(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MessageCallback(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::VOD::MessageCallback</code>.
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
    public MessageCallback(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.MessageCallbackProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::VOD::MessageCallback</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public MessageCallback(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.MessageCallbackProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AppId: appid.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AuthKey: auth key.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthKey() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthKey", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AuthSwitch: auth swith.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CallbackType: callback type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCallbackType() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CallbackUrl: url.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCallbackUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EventTypeList: event type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEventTypeList() {
        return software.amazon.jsii.Kernel.get(this, "attrEventTypeList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MnsEndpoint: mns endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMnsEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrMnsEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MnsQueueName: queue name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMnsQueueName() {
        return software.amazon.jsii.Kernel.get(this, "attrMnsQueueName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vod.MessageCallback}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vod.MessageCallback> {
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
        private final com.aliyun.ros.cdk.vod.MessageCallbackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vod.MessageCallbackProps.Builder();
        }

        /**
         * Property callbackType: Callback method.
         * <p>
         * @return {@code this}
         * @param callbackType Property callbackType: Callback method. This parameter is required.
         */
        public Builder callbackType(final java.lang.String callbackType) {
            this.props.callbackType(callbackType);
            return this;
        }
        /**
         * Property callbackType: Callback method.
         * <p>
         * @return {@code this}
         * @param callbackType Property callbackType: Callback method. This parameter is required.
         */
        public Builder callbackType(final com.aliyun.ros.cdk.core.IResolvable callbackType) {
            this.props.callbackType(callbackType);
            return this;
        }

        /**
         * Property appId: App ID.
         * <p>
         * If it is not passed, it is the ID of the default
         * application of the system, with a fixed value: app-1000000.
         * <p>
         * @return {@code this}
         * @param appId Property appId: App ID. This parameter is required.
         */
        public Builder appId(final java.lang.String appId) {
            this.props.appId(appId);
            return this;
        }
        /**
         * Property appId: App ID.
         * <p>
         * If it is not passed, it is the ID of the default
         * application of the system, with a fixed value: app-1000000.
         * <p>
         * @return {@code this}
         * @param appId Property appId: App ID. This parameter is required.
         */
        public Builder appId(final com.aliyun.ros.cdk.core.IResolvable appId) {
            this.props.appId(appId);
            return this;
        }

        /**
         * Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers.
         * <p>
         * This parameter can be set when the callback method is HTTP.
         * <p>
         * @return {@code this}
         * @param authKey Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers. This parameter is required.
         */
        public Builder authKey(final java.lang.String authKey) {
            this.props.authKey(authKey);
            return this;
        }
        /**
         * Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers.
         * <p>
         * This parameter can be set when the callback method is HTTP.
         * <p>
         * @return {@code this}
         * @param authKey Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers. This parameter is required.
         */
        public Builder authKey(final com.aliyun.ros.cdk.core.IResolvable authKey) {
            this.props.authKey(authKey);
            return this;
        }

        /**
         * Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP.
         * <p>
         * @return {@code this}
         * @param authSwitch Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP. This parameter is required.
         */
        public Builder authSwitch(final java.lang.String authSwitch) {
            this.props.authSwitch(authSwitch);
            return this;
        }
        /**
         * Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP.
         * <p>
         * @return {@code this}
         * @param authSwitch Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP. This parameter is required.
         */
        public Builder authSwitch(final com.aliyun.ros.cdk.core.IResolvable authSwitch) {
            this.props.authSwitch(authSwitch);
            return this;
        }

        /**
         * Property callbackUrl: Callback address.
         * <p>
         * When the callback method is HTTP,
         * this parameter needs to be set. The length of the callback address
         * URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
         * <p>
         * @return {@code this}
         * @param callbackUrl Property callbackUrl: Callback address. This parameter is required.
         */
        public Builder callbackUrl(final java.lang.String callbackUrl) {
            this.props.callbackUrl(callbackUrl);
            return this;
        }
        /**
         * Property callbackUrl: Callback address.
         * <p>
         * When the callback method is HTTP,
         * this parameter needs to be set. The length of the callback address
         * URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
         * <p>
         * @return {@code this}
         * @param callbackUrl Property callbackUrl: Callback address. This parameter is required.
         */
        public Builder callbackUrl(final com.aliyun.ros.cdk.core.IResolvable callbackUrl) {
            this.props.callbackUrl(callbackUrl);
            return this;
        }

        /**
         * Property eventTypeList: Callback event type.
         * <p>
         * When the value is empty, all message notifications are turned off,
         * and when the value is ALL, all message notifications are turned on.
         * You can also specify to enable certain message notifications,
         * and use a comma (,) to separate multiple event types.
         * <p>
         * @return {@code this}
         * @param eventTypeList Property eventTypeList: Callback event type. This parameter is required.
         */
        public Builder eventTypeList(final java.lang.String eventTypeList) {
            this.props.eventTypeList(eventTypeList);
            return this;
        }
        /**
         * Property eventTypeList: Callback event type.
         * <p>
         * When the value is empty, all message notifications are turned off,
         * and when the value is ALL, all message notifications are turned on.
         * You can also specify to enable certain message notifications,
         * and use a comma (,) to separate multiple event types.
         * <p>
         * @return {@code this}
         * @param eventTypeList Property eventTypeList: Callback event type. This parameter is required.
         */
        public Builder eventTypeList(final com.aliyun.ros.cdk.core.IResolvable eventTypeList) {
            this.props.eventTypeList(eventTypeList);
            return this;
        }

        /**
         * Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint.
         * <p>
         * You can log in to the message service
         * console and click the Get Endpoint button in the upper right corner to get it.
         * <p>
         * @return {@code this}
         * @param mnsEndpoint Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint. This parameter is required.
         */
        public Builder mnsEndpoint(final java.lang.String mnsEndpoint) {
            this.props.mnsEndpoint(mnsEndpoint);
            return this;
        }
        /**
         * Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint.
         * <p>
         * You can log in to the message service
         * console and click the Get Endpoint button in the upper right corner to get it.
         * <p>
         * @return {@code this}
         * @param mnsEndpoint Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint. This parameter is required.
         */
        public Builder mnsEndpoint(final com.aliyun.ros.cdk.core.IResolvable mnsEndpoint) {
            this.props.mnsEndpoint(mnsEndpoint);
            return this;
        }

        /**
         * Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console.
         * <p>
         * When the callback method is MNS, this parameter needs to be set.
         * <p>
         * @return {@code this}
         * @param mnsQueueName Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console. This parameter is required.
         */
        public Builder mnsQueueName(final java.lang.String mnsQueueName) {
            this.props.mnsQueueName(mnsQueueName);
            return this;
        }
        /**
         * Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console.
         * <p>
         * When the callback method is MNS, this parameter needs to be set.
         * <p>
         * @return {@code this}
         * @param mnsQueueName Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console. This parameter is required.
         */
        public Builder mnsQueueName(final com.aliyun.ros.cdk.core.IResolvable mnsQueueName) {
            this.props.mnsQueueName(mnsQueueName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vod.MessageCallback}.
         */
        @Override
        public com.aliyun.ros.cdk.vod.MessageCallback build() {
            return new com.aliyun.ros.cdk.vod.MessageCallback(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
