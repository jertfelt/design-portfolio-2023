

const FullPageScroll = () => {



  return (   

    <div className="app-wrap">
    <LazyMotion features={domAnimation}>
      <AnimatePresence exitBeforeEnter>
        <m.div
          key={router.route.concat(animation.name)}
          className="page-wrap"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animation.variants}
          transition={animation.transition}
        >
          <Component {...pageProps} />
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  </div>
  
   );
}
 
export default FullPageScroll;