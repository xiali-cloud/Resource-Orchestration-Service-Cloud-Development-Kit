package com.aliyun.ros.cdk.core;

/**
 * Interface for values that can be resolvable later.
 * <p>
 * Tokens are special objects that participate in synthesis.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:06.797Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IResolvable")
@software.amazon.jsii.Jsii.Proxy(IResolvable.Jsii$Proxy.class)
public interface IResolvable extends software.amazon.jsii.JsiiSerializable {

    /**
     * The creation stack of this resolvable which will be appended to errors thrown during resolution.
     * <p>
     * If this returns an empty array the stack will not be attached.
     */
    @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getCreationStack();

    /**
     * Produce the Token's value at resolution time.
     * <p>
     * @param context This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context);

    /**
     * Return a string representation of this resolvable object.
     * <p>
     * Returns a reversible string representation.
     */
    @org.jetbrains.annotations.NotNull java.lang.String toString();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IResolvable.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The creation stack of this resolvable which will be appended to errors thrown during resolution.
         * <p>
         * If this returns an empty array the stack will not be attached.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getCreationStack() {
            return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "creationStack", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
        }

        /**
         * Produce the Token's value at resolution time.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
        }

        /**
         * Return a string representation of this resolvable object.
         * <p>
         * Returns a reversible string representation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.String toString() {
            return software.amazon.jsii.Kernel.call(this, "toString", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }
    }

    /**
     * Internal default implementation for {@link IResolvable}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IResolvable {

        /**
         * The creation stack of this resolvable which will be appended to errors thrown during resolution.
         * <p>
         * If this returns an empty array the stack will not be attached.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getCreationStack() {
            return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "creationStack", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
        }

        /**
         * Produce the Token's value at resolution time.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
        }
    }
}
