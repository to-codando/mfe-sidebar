export default ({ html, css }) => {
  const template = () => html`
    <div>
      <div data-component="sidebar"></div>
    </div>
  `

  const styles = () => css`
    ctx {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
    }

    ctx > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      width: 100%;
      height: 100vh;
    }
  `

  return { template, styles }
}
