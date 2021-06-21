package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a `ALIYUN::ResourceManager::Folder`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:44.004Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.FolderProps")
@software.amazon.jsii.Jsii.Proxy(FolderProps.Jsii$Proxy.class)
public interface FolderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property folderName: The name of the folder.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFolderName();

    /**
     * Property parentFolderId: The ID of the parent folder.
     * <p>
     * If not set, the system default value will be used
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParentFolderId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FolderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FolderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FolderProps> {
        private java.lang.Object folderName;
        private java.lang.Object parentFolderId;

        /**
         * Sets the value of {@link FolderProps#getFolderName}
         * @param folderName Property folderName: The name of the folder. This parameter is required.
         * @return {@code this}
         */
        public Builder folderName(java.lang.String folderName) {
            this.folderName = folderName;
            return this;
        }

        /**
         * Sets the value of {@link FolderProps#getFolderName}
         * @param folderName Property folderName: The name of the folder. This parameter is required.
         * @return {@code this}
         */
        public Builder folderName(com.aliyun.ros.cdk.core.IResolvable folderName) {
            this.folderName = folderName;
            return this;
        }

        /**
         * Sets the value of {@link FolderProps#getParentFolderId}
         * @param parentFolderId Property parentFolderId: The ID of the parent folder.
         *                       If not set, the system default value will be used
         * @return {@code this}
         */
        public Builder parentFolderId(java.lang.String parentFolderId) {
            this.parentFolderId = parentFolderId;
            return this;
        }

        /**
         * Sets the value of {@link FolderProps#getParentFolderId}
         * @param parentFolderId Property parentFolderId: The ID of the parent folder.
         *                       If not set, the system default value will be used
         * @return {@code this}
         */
        public Builder parentFolderId(com.aliyun.ros.cdk.core.IResolvable parentFolderId) {
            this.parentFolderId = parentFolderId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FolderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FolderProps build() {
            return new Jsii$Proxy(folderName, parentFolderId);
        }
    }

    /**
     * An implementation for {@link FolderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FolderProps {
        private final java.lang.Object folderName;
        private final java.lang.Object parentFolderId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.folderName = software.amazon.jsii.Kernel.get(this, "folderName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parentFolderId = software.amazon.jsii.Kernel.get(this, "parentFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object folderName, final java.lang.Object parentFolderId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.folderName = java.util.Objects.requireNonNull(folderName, "folderName is required");
            this.parentFolderId = parentFolderId;
        }

        @Override
        public final java.lang.Object getFolderName() {
            return this.folderName;
        }

        @Override
        public final java.lang.Object getParentFolderId() {
            return this.parentFolderId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("folderName", om.valueToTree(this.getFolderName()));
            if (this.getParentFolderId() != null) {
                data.set("parentFolderId", om.valueToTree(this.getParentFolderId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.FolderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FolderProps.Jsii$Proxy that = (FolderProps.Jsii$Proxy) o;

            if (!folderName.equals(that.folderName)) return false;
            return this.parentFolderId != null ? this.parentFolderId.equals(that.parentFolderId) : that.parentFolderId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.folderName.hashCode();
            result = 31 * result + (this.parentFolderId != null ? this.parentFolderId.hashCode() : 0);
            return result;
        }
    }
}
