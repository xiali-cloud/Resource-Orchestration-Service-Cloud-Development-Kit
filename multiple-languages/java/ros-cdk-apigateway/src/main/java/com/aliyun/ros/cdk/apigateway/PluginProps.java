package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::Plugin`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.306Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.PluginProps")
@software.amazon.jsii.Jsii.Proxy(PluginProps.Jsii$Proxy.class)
public interface PluginProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property pluginData: The definition statement of the plug-in.
     * <p>
     * Plug-in definition statements in the JSON and YAML formats are supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPluginData();

    /**
     * Property pluginName: The name of the plug-in that you want to create.
     * <p>
     * It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPluginName();

    /**
     * Property pluginType: The type of the plug-in.
     * <p>
     * Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPluginType();

    /**
     * Property description: The description of the plug-in, which cannot exceed 200 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PluginProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PluginProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PluginProps> {
        private java.lang.Object pluginData;
        private java.lang.Object pluginName;
        private java.lang.Object pluginType;
        private java.lang.Object description;

        /**
         * Sets the value of {@link PluginProps#getPluginData}
         * @param pluginData Property pluginData: The definition statement of the plug-in. This parameter is required.
         *                   Plug-in definition statements in the JSON and YAML formats are supported.
         * @return {@code this}
         */
        public Builder pluginData(java.lang.String pluginData) {
            this.pluginData = pluginData;
            return this;
        }

        /**
         * Sets the value of {@link PluginProps#getPluginData}
         * @param pluginData Property pluginData: The definition statement of the plug-in. This parameter is required.
         *                   Plug-in definition statements in the JSON and YAML formats are supported.
         * @return {@code this}
         */
        public Builder pluginData(com.aliyun.ros.cdk.core.IResolvable pluginData) {
            this.pluginData = pluginData;
            return this;
        }

        /**
         * Sets the value of {@link PluginProps#getPluginName}
         * @param pluginName Property pluginName: The name of the plug-in that you want to create. This parameter is required.
         *                   It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
         * @return {@code this}
         */
        public Builder pluginName(java.lang.String pluginName) {
            this.pluginName = pluginName;
            return this;
        }

        /**
         * Sets the value of {@link PluginProps#getPluginName}
         * @param pluginName Property pluginName: The name of the plug-in that you want to create. This parameter is required.
         *                   It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
         * @return {@code this}
         */
        public Builder pluginName(com.aliyun.ros.cdk.core.IResolvable pluginName) {
            this.pluginName = pluginName;
            return this;
        }

        /**
         * Sets the value of {@link PluginProps#getPluginType}
         * @param pluginType Property pluginType: The type of the plug-in. This parameter is required.
         *                   Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
         * @return {@code this}
         */
        public Builder pluginType(java.lang.String pluginType) {
            this.pluginType = pluginType;
            return this;
        }

        /**
         * Sets the value of {@link PluginProps#getPluginType}
         * @param pluginType Property pluginType: The type of the plug-in. This parameter is required.
         *                   Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
         * @return {@code this}
         */
        public Builder pluginType(com.aliyun.ros.cdk.core.IResolvable pluginType) {
            this.pluginType = pluginType;
            return this;
        }

        /**
         * Sets the value of {@link PluginProps#getDescription}
         * @param description Property description: The description of the plug-in, which cannot exceed 200 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PluginProps#getDescription}
         * @param description Property description: The description of the plug-in, which cannot exceed 200 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PluginProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PluginProps build() {
            return new Jsii$Proxy(pluginData, pluginName, pluginType, description);
        }
    }

    /**
     * An implementation for {@link PluginProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PluginProps {
        private final java.lang.Object pluginData;
        private final java.lang.Object pluginName;
        private final java.lang.Object pluginType;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.pluginData = software.amazon.jsii.Kernel.get(this, "pluginData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pluginName = software.amazon.jsii.Kernel.get(this, "pluginName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pluginType = software.amazon.jsii.Kernel.get(this, "pluginType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object pluginData, final java.lang.Object pluginName, final java.lang.Object pluginType, final java.lang.Object description) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.pluginData = java.util.Objects.requireNonNull(pluginData, "pluginData is required");
            this.pluginName = java.util.Objects.requireNonNull(pluginName, "pluginName is required");
            this.pluginType = java.util.Objects.requireNonNull(pluginType, "pluginType is required");
            this.description = description;
        }

        @Override
        public final java.lang.Object getPluginData() {
            return this.pluginData;
        }

        @Override
        public final java.lang.Object getPluginName() {
            return this.pluginName;
        }

        @Override
        public final java.lang.Object getPluginType() {
            return this.pluginType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("pluginData", om.valueToTree(this.getPluginData()));
            data.set("pluginName", om.valueToTree(this.getPluginName()));
            data.set("pluginType", om.valueToTree(this.getPluginType()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.PluginProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PluginProps.Jsii$Proxy that = (PluginProps.Jsii$Proxy) o;

            if (!pluginData.equals(that.pluginData)) return false;
            if (!pluginName.equals(that.pluginName)) return false;
            if (!pluginType.equals(that.pluginType)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.pluginData.hashCode();
            result = 31 * result + (this.pluginName.hashCode());
            result = 31 * result + (this.pluginType.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
