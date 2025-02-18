package com.aliyun.ros.cdk.nas.datasource;

/**
 * Properties for defining a <code>DATASOURCE::NAS::AccessGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.205Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.datasource.AccessGroupsProps")
@software.amazon.jsii.Jsii.Proxy(AccessGroupsProps.Jsii$Proxy.class)
public interface AccessGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessGroupName: The name of the permission group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessGroupName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccessGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccessGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccessGroupsProps> {
        java.lang.Object accessGroupName;

        /**
         * Sets the value of {@link AccessGroupsProps#getAccessGroupName}
         * @param accessGroupName Property accessGroupName: The name of the permission group.
         * @return {@code this}
         */
        public Builder accessGroupName(java.lang.String accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link AccessGroupsProps#getAccessGroupName}
         * @param accessGroupName Property accessGroupName: The name of the permission group.
         * @return {@code this}
         */
        public Builder accessGroupName(com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccessGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccessGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccessGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccessGroupsProps {
        private final java.lang.Object accessGroupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessGroupName = software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessGroupName = builder.accessGroupName;
        }

        @Override
        public final java.lang.Object getAccessGroupName() {
            return this.accessGroupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAccessGroupName() != null) {
                data.set("accessGroupName", om.valueToTree(this.getAccessGroupName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.datasource.AccessGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccessGroupsProps.Jsii$Proxy that = (AccessGroupsProps.Jsii$Proxy) o;

            return this.accessGroupName != null ? this.accessGroupName.equals(that.accessGroupName) : that.accessGroupName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessGroupName != null ? this.accessGroupName.hashCode() : 0;
            return result;
        }
    }
}
