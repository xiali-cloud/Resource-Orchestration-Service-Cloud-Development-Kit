package com.aliyun.ros.cdk.core;

/**
 * Converts all fragments to strings and concats those.
 * <p>
 * Drops 'undefined's.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:17.928Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.StringConcat")
public class StringConcat extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IFragmentConcatenator {

    protected StringConcat(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected StringConcat(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public StringConcat() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Join the fragment on the left and on the right.
     * <p>
     * @param left This parameter is required.
     * @param right This parameter is required.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object join(final @org.jetbrains.annotations.NotNull java.lang.Object left, final @org.jetbrains.annotations.NotNull java.lang.Object right) {
        return software.amazon.jsii.Kernel.call(this, "join", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { left, right });
    }
}
